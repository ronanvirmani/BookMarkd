import React from 'react';

function TopTags({ tags }) {
  const tagStyle = {
    backgroundColor: '#808000', // Badge color
    borderRadius: '20px',
    padding: '2px 15px',
    color: '#fff',
    margin: '5px',
  };

  return (
    <div className="container my-8" style={{ marginTop: '8px' }}>
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-center flex-wrap">
            <p className="mb-0 me-2">Top Tags:</p>
            {tags.map((tag, index) => (
              <span key={index} style={tagStyle}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTags;

