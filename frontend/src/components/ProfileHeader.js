import React from 'react';

function ProfileHeader({ profilePicUrl }) {
  const headerStyle = {
    backgroundColor: '#FFD700', // Gold
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '30px',
  };

  // Adjusted to align items at the start (left alignment in LTR languages)
  const statsContainerStyle = {
    display: 'flex',
    justifyContent: 'start', // Adjusted for alignment
    alignItems: 'center',
    width: '100%',
    paddingTop: '20px', // Align vertically with "GOJOS". Adjust as necessary based on your layout.
  };

  const statStyle = {
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <div className="container" style={{marginTop: '30px'}}>
      <div style={headerStyle} className="row">
        <div className="col-md-3">
          <img src={profilePicUrl} alt="Profile" style={{borderRadius: '50%', width: '100px', height: '100px'}} />
          <h3>GOJOS</h3>
          <p>description right here</p>
        </div>
        <div className="col-md-9">
          <div style={statsContainerStyle}>
            {/* Each stat item */}
            <div style={statStyle}><span className="font-weight-bold">25</span> Books</div>
            <div style={statStyle}><span className="font-weight-bold">123</span> Annotations</div>
            <div style={statStyle}><span className="font-weight-bold">20</span> Followers</div>
            <div style={statStyle}><span className="font-weight-bold">12</span> Genres</div>
            <div style={statStyle}><span className="font-weight-bold">20</span> Following</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;

