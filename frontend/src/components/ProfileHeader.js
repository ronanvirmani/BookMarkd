import React, { useState } from 'react';
import { useAppContext } from '../AppContext';


function ProfileHeader({ profilePicUrl, onUpdateProfilePicUrl }) {
  const { user } = useAppContext(); // Destructure user from the context
  const [newUrl, setNewUrl] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onUpdateProfilePicUrl(newUrl);
    setEditMode(false); // Exit edit mode after submission
  };

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
          <img src={profilePicUrl} alt="Profile" style={{borderRadius: '50%', width: '100px', height: '100px', cursor: 'pointer'}} onClick={() => setEditMode(true)} />
          {editMode && (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter image URL" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
              <button type="submit">Update</button>
            </form>
          )}
          {user ? <h3>{user.email}</h3> : <h3>Loading...</h3>}
          <p>description right here</p>
        </div>
        ...
      </div>
    </div>
  );
}

export default ProfileHeader;

