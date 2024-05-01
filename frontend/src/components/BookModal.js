import React, { useState, useEffect } from 'react';
import { useAppContext } from '../AppContext';

function BookModal({ closeModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedObject, setSelectedObject] = useState({});

  const { user, supabase } = useAppContext();

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchTerm.length > 2) { // Trigger search for terms longer than 2 characters
        const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        const booksData = data.docs.map(book => ({
          name: book.title,
          url: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` // Assuming 'cover_i' exists
        })).filter(book => book.url.includes('id')); // Filter out books without cover images
        setBooks(booksData);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchBooks();
    }, 500); // Debounce the API call by 500ms

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleBookChange = (event) => {
    const book = JSON.parse(event.target.value);
    setSelectedBook(event.target.value);
    setSelectedObject(book);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
  
    // Check if the book already exists for the user
    const { data: existingBooks, error: fetchError } = await supabase
      .from('book_table')
      .select()
      .eq('user_id', user.id)
      .eq('book_name', selectedObject.name);
  
    if (fetchError) {
      console.error('Error fetching existing books:', fetchError);
      return;
    }
  
    // If the book already exists for this user, prevent addition
    if (existingBooks.length > 0) {
      console.error('Book already added by the user');
      alert('You have already added this book.');
      return;
    }
  
    // If no existing book is found, insert the new book data
    const bookData = {
      user_id: user.id,
      book_name: selectedObject.name,
      book_cover_image: selectedObject.url, // This should be dynamically determined
    //   userBookId: selectedObject.userBookId,
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
        <form onSubmit={handleSubmit}>
          <select value={selectedBook} onChange={handleBookChange} style={{ width: '100%', padding: '10px', marginBottom: '20px' }}>
            <option value="">Select a book</option>
            {books.map((book, index) => (
              <option key={index} value={JSON.stringify(book)}>{book.name}</option>
            ))}
          </select>
          <button type="submit" className='rounded-3' style={{ width: '100%', padding: '10px', backgroundColor: '#808000', color: 'white', border: 'none' }}>Submit</button>
        </form>
        <button onClick={closeModal} style={{ width: '100%', padding: '10px', marginTop: '10px' }}>Close</button>
      </div>
    </div>
  );
}

export default BookModal;