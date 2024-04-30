// Book.js
import React from 'react';

function Book({ imageUrl, altText }) {
  // Inline style for resizing
  console.log(imageUrl); // Debugging output
  const imageStyle = {
    width: '200px',
    height: '300px',
    objectFit: 'cover', // This ensures the image covers the space without distorting aspect ratio
  };

  return (
    <div>
      <img src={imageUrl} alt={altText} style={imageStyle} />
    </div>
  );
}

export default Book;

