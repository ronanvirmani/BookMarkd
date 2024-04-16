import React from 'react';
import Book from './Book';

function BookList({ title, books }) {
  return (
    <div className="container my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="row">
        {books.map((book, index) => (
          // Apply inline style for margins here
          <div className="col-md-3" key={index} style={{ margin: '20px' }}> 
            <Book imageUrl={book.imageUrl} altText={book.altText} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
