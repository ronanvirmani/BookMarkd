import React, { useEffect, useState } from 'react';
import bookSearch from '../components/bookSearch';
import ProfileHeader from '../components/ProfileHeader';
import BookList from '../components/BookList';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopTags from '../components/TopTags';
import { useAppContext } from '../AppContext';

function ProfilePage() {
  const { user, supabase, loading } = useAppContext();
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchFavoriteBooks();
    } else if (!loading) {
      window.location.href = "/";
    }
  }, [user, loading]);

  const fetchFavoriteBooks = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('book_table') // Your table name
        .select() // Ensure these fields exist in your table
        .eq('user_id', user.id); // Filter to get only books linked to the logged-in user

      if (error) throw error;

    // Log the entire data object to see what's being returned
    console.log("Fetched books data:", data);

    // Optionally, log just the image URLs to focus on them
    data.forEach(book => {
      console.log("Book image URL:", book.book_cover_image);
    });

    const booksFormatted = data.map(book => ({
      imageUrl: book.book_cover_image,
      altText: book.title || "No title available", // Assuming 'title' is another field in your data
      // userBookId: book.userBookId,
      id: book.id,
    }));

      setFavoriteBooks(booksFormatted);
    } catch (error) {
      console.error('Error fetching favorite books:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <bookSearch />
      <ProfileHeader profilePicUrl={'https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg'} />
      <TopTags tags={["Fiction", "LOTR", "Harry Potter Hater"]} />
      {isLoading ? (
        <p>Loading books...</p>
      ) : (
        <BookList title="My Books" books={favoriteBooks} includeAddNew={true} />
      )}
      {/* <BookList title="Recent Annotations" books={[{ imageUrl: "https://placehold.co/200x300", altText: "Recent Book 1" }]} /> */}
    </div>
  );
}

export default ProfilePage;
