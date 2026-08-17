import React, { useState } from 'react';
import axios from 'axios';

function UploadPage({ onNavigate }) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);

    try {
      const response = await axios.post('http://localhost:3000/create', formData);
      setMessage(response.data);
      // Go to gallery after 1 second
      setTimeout(() => onNavigate('gallery'), 1000);
    } catch (error) {
      console.error(error);
      setMessage("Error uploading");
    }
  };

  return (
    <div className="upload-container fade-in">
      <h2>Upload a Moment</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <input 
            type="file" 
            onChange={(e) => setImage(e.target.files[0])} 
            style={{ color: 'white' }}
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Caption..." 
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="caption-input"
          />
        </div>
        <button type="submit" className="submit-btn">Upload</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default UploadPage;
