import React, { useState } from 'react';

function BookModal({ closeModal }) {
  const [selectedBook, setSelectedBook] = useState('');

  const handleBookChange = (event) => {
    setSelectedBook(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Book:", selectedBook); // You can replace this with an action
    closeModal();
  };

  return (
    <div className="modal-background" style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="modal-content" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', width: '300px' }}>
        <h2>Select a Book</h2>
        <form onSubmit={handleSubmit}>
          <select value={selectedBook} onChange={handleBookChange} style={{ width: '100%', padding: '10px', marginBottom: '20px' }}>
            <option value="">Select a book</option>
            {/* Populate this with actual book data */}
            <option value="book1">Dune</option>
            <option value="book2">A Game Of Thrones</option>
            <option value="book3">East of Eden</option>
          </select>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Submit</button>
        </form>
        <button onClick={closeModal} style={{ width: '100%', padding: '10px', marginTop: '10px' }}>Close</button>
      </div>
    </div>
  );
}

export default BookModal;
