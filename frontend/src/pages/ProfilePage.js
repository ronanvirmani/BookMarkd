import React, { useEffect } from 'react';
import bookSearch from '../components/bookSearch';
import ProfileHeader from '../components/ProfileHeader';
import BookList from '../components/BookList';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopTags from '../components/TopTags'; // Make sure to import the TopTags component

function ProfilePage() {
  const profilePicUrl = 'https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg';
  
  const favoriteBooks = [
    { imageUrl: "https://placehold.co/200x300", altText: "Favorite Book 1" },
    { imageUrl: "https://m.media-amazon.com/images/I/817Xh+bqwOL._AC_UF1000,1000_QL80_.jpg", altText: "Dune 2" },
    { imageUrl: "https://placehold.co/200x300", altText: "Favorite Book 3" },
  ];
  
  const recentBooks = [
    { imageUrl: "https://placehold.co/200x300", altText: "Recent Book 1" },
  ];

  const tags = ["Fiction", "LOTR", "Harry Potter Hater"];

  // Use useEffect to set the document title
  useEffect(() => {
    document.title = "Profile Page";
  }, []); // The empty array means this effect runs once when the component mounts

  return (
    <div>
      <bookSearch />
      <ProfileHeader profilePicUrl={profilePicUrl}/>
      <TopTags tags={tags} />
      <BookList title="Favorite Books" books={favoriteBooks} />
      <BookList title="Recent Annotations" books={recentBooks} />
    </div>
  );
}

export default ProfilePage;

