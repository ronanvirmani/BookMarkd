import React, { useState } from 'react';
import { useAppContext } from '../AppContext';

function BookModal({ closeModal }) {
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedObject, setSelectedObject] = useState({});

  const handleBookChange = (event) => {
    setSelectedBook(event.target.value);
    JSON.parse(event.target.value);
    console.log("Event ID:" + event.target.value);
    setSelectedObject(JSON.parse(event.target.value));
  };

  const { user, supabase } = useAppContext();
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
        <form onSubmit={handleSubmit}>
          <select value={selectedBook} onChange={handleBookChange} style={{ width: '100%', padding: '10px', marginBottom: '20px' }}>
            <option value="">Select a book</option>
            {/* Populate this with actual book data */}
            <option value='{"name":"Dune", "url":"https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1680860505/content-items/013/518/117/dunellibre-copia1-original.jpg?1680860505", "userBookId":"1"}'>Dune</option>
            <option value='{"name":"A Game Of Thrones", "url":"https://cdn.kobo.com/book-images/dd1baacc-184b-4f28-a7d5-6dbe70816fb7/1200/1200/False/a-game-of-thrones.jpg", "userBookId":"2"}'>A Game Of Thrones</option>
            <option value='{"name":"East of Eden", "url":"https://upload.wikimedia.org/wikipedia/commons/9/9a/East_of_Eden_%281952_1st_ed_dust_jacket%29.jpg", "userBookId":"3"}'>East of Eden</option>
          </select>
          <button type="submit" className='rounded-3' style={{ width: '100%', padding: '10px', backgroundColor: '#808000', color: 'white', border: 'none' }}>Submit</button>
        </form>
        <button onClick={closeModal} style={{ width: '100%', padding: '10px', marginTop: '10px' }}>Close</button>
      </div>
    </div>
  );
}

export default BookModal;
