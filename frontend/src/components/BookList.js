import React, { useState } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import BookModal from './BookModal';
import {useAppContext} from "../AppContext";
import {fetchFavoriteBooks} from "../pages/ProfilePage";

function BookList({ title, books, includeAddNew = false }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { supabase, user } = useAppContext();

  const toggleModal = () => setModalOpen(!isModalOpen);

  async function handleDelete(bookId) {
    try {
        const { error } = await supabase
            .from('annotation')
            .delete()
            .eq('user_book_id', bookId);
        if (error) {
            console.error("Error removing annotations:", error);
        }
        else {
            console.log("successfully removed annotations");
        }
        const { err } = await supabase
            .from('book_table')
            .delete()
            .eq('id', bookId);
        if (err) {
            console.error("Error removing book:", err);
        }
        else {
            console.log("successfully removed book");
            //refresh the page
            window.location.reload();
        }
    }
    catch (error) {
        console.error("Error removing annotations:", error);
    }
  }

  return (
    <div className="container my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="row">
      {books.map((book, index) => (
          <div className="col-md-3 relative" key={index} style={{ margin: '20px' }}>
            <Link to={`/annotations/${book.id}`}> {/* Assuming each book object has userBookId */}
              <Book imageUrl={book.imageUrl} altText={book.altText} />
            </Link>
              <button onClick={() => handleDelete(book.id)} type="submit" className="absolute bottom-5 left-5 text-brown text-2xl bg-beige rounded px-2">&times;</button>
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
