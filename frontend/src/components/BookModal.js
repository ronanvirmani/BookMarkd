import React, { useState, useEffect } from 'react';
import { useAppContext } from '../AppContext';

function BookModal({ closeModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedObject, setSelectedObject] = useState({});

  const { user, supabase } = useAppContext();

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchTerm.length > 2) {
        const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        const booksData = data.docs.map(book => ({
          name: book.title,
          url: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : undefined
        })).filter(book => book.url); // Ensures only books with images are shown
        setBooks(booksData);
      } else {
        setBooks([]); // Clear results when search term is too short
      }
    };

    const timeoutId = setTimeout(() => {
      fetchBooks();
    }, 500); // Debounce the API call

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleBookSelect = (book) => {
    setSelectedObject(book);
    setSearchTerm(book.name); // Display the selected book's name in the input field
    setBooks([]); // Clear search results after selection
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data: existingBooks, error: fetchError } = await supabase
      .from('book_table')
      .select()
      .eq('user_id', user.id)
      .eq('book_name', selectedObject.name);
    
    if (fetchError) {
      console.error('Error fetching existing books:', fetchError);
      return;
    }
    
    if (existingBooks.length > 0) {
      alert('You have already added this book.');
      return;
    }
    
    const bookData = {
      user_id: user.id,
      book_name: selectedObject.name,
      book_cover_image: selectedObject.url,
    };
    
    const { data: insertData, error: insertError } = await supabase
      .from('book_table')
      .insert([bookData]);
    
    if (insertError) {
      console.error('Error inserting data:', insertError);
      return;
    }
    
    console.log('Inserted data:', insertData);
    closeModal();
    window.location.reload();
  };

  return (
    <div className="modal-background" style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="modal-content" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', width: '300px' }}>
        <h2 className='text-center text-brown'>Select a Book</h2>
        <input 
          type="text" 
          placeholder="Search book by title..." 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        {books.length > 0 && (
          <ul style={{ listStyleType: 'none', padding: 0, maxHeight: '150px', overflowY: 'auto' }}>
            {books.map((book, index) => (
              <li key={index} onClick={() => handleBookSelect(book)} style={{ padding: '10px', cursor: 'pointer', backgroundColor: 'white', borderBottom: '1px solid #ccc' }}>
                {book.name}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleSubmit} style={{ width: '100%', padding: '10px', marginTop: '10px', backgroundColor: '#808000', color: 'white', border: 'none' }}>Add Book</button>
        <button onClick={closeModal} style={{ width: '100%', padding: '10px', marginTop: '10px' }}>Close</button>
      </div>
    </div>
  );
}

export default BookModal;
