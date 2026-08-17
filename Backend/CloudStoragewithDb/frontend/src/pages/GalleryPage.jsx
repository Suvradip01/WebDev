import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GalleryPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/view')
      .then(response => setPosts(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="gallery-container fade-in">
      <h2>Gallery</h2>
      <div className="masonry-grid">
        {posts.map(post => (
          <div key={post._id} className="post-card fade-up">
            <div className="post-image-wrapper">
              <img src={post.image} alt="post" className="post-image" />
            </div>
            <div className="post-content">
              <p className="post-caption">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
