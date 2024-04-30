import React, { useState } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import BookModal from './BookModal'; 

function BookList({ title, books, includeAddNew = false }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="container my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="row">
      {books.map((book, index) => (
          <div className="col-md-3" key={index} style={{ margin: '20px' }}>
            <Link to={`/annotations/${book.userBookId}`}> {/* Assuming each book object has userBookId */}
              <Book imageUrl={book.imageUrl} altText={book.altText} />
            </Link>
          </div>
        ))}
        {includeAddNew && (
          <div className="col-md-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div onClick={toggleModal} style={{ width: '200px', height: '300px', border: '2px dashed gray', borderRadius: '5px', color: 'gray', cursor: 'pointer' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png" alt="Add new book" />
            </div>
          </div>
        )}
      </div>
      {isModalOpen && <BookModal closeModal={toggleModal} />}
    </div>
  );
}


export default BookList;
