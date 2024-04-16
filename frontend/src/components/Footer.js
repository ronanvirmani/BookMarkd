import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#420808', // Dark Red
    color: '#fff',
    padding: '20px 0'
  };

  return (
    <footer style={footerStyle}>
      <div className="container text-center">
        <p>BookMarkd© 2024</p>
      </div>
    </footer>
  );
}

export default Footer;

