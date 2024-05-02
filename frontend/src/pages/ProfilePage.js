import React, { useEffect, useState } from 'react';
// import bookSearch from '../components/bookSearch';
import ProfileHeader from '../components/ProfileHeader';
import BookList from '../components/BookList';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopTags from '../components/TopTags';
import { useAppContext } from '../AppContext';

function ProfilePage() {
  const { user, supabase, loading, setUser } = useAppContext();
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (user && shouldFetch) {
      fetchProfileData();
      fetchFavoriteBooks();
      setShouldFetch(false); // This will ensure the data is fetched only once
    } else if (!loading && !user) {
      window.location.href = "/";
    }
  }, [user, loading, shouldFetch]); // Now also depends on shouldFetch
  

  
  const updateProfilePicUrl = async (newUrl) => {
    try {
      // Check if a profile already exists
      const { data: existingProfile, error: fetchError } = await supabase
        .from('user')
        .select()
        .eq('id', user.id);
  
      if (fetchError) throw fetchError;
  
      if (existingProfile.length === 0) {
        // No profile exists, create a new one
        const { data: createData, error: createError } = await supabase
          .from('user')
          .insert([{ id: user.id, pfpURL: newUrl }]);
        if (createError) throw createError;
        console.log('New profile created:', createData);
        window.location.reload();
      } else {
        // Profile exists, update it
        const { data: updateData, error: updateError } = await supabase
          .from('user')
          .update({ pfpURL: newUrl })
          .eq('id', user.id);
        if (updateError) throw updateError;
        console.log('Profile updated successfully:', updateData);
        window.location.reload();
      }
    } catch (error) {
      console.error('Error managing profile:', error);
    }
  };
  
  const fetchProfileData = async() => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('user')
        .select()
        .eq('id', user.id);
  
      if (error) throw error;
      console.log("Fetched profile data: ", data);
  
      if (data.length > 0) {
        const profileUrl = data[0].pfpURL; // Assume the first record is the correct one
        setUser(current => ({ ...current, profile_pic_url: profileUrl }));
      }
  
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setIsLoading(false);
    }
  }
  

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
      <ProfileHeader profilePicUrl={user?.profile_pic_url || 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'} onUpdateProfilePicUrl={updateProfilePicUrl} />
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
