import React, { useState } from 'react';
import UploadPage from './pages/UploadPage';
import GalleryPage from './pages/GalleryPage';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('upload'); // 'upload' or 'gallery'

  return (
    <div className="app-container">
      <header className="header">
        <h1>Moments App</h1>
        <nav className="nav-tabs">
          <button 
            className={`tab-btn ${currentPage === 'upload' ? 'active' : ''}`}
            onClick={() => setCurrentPage('upload')}
          >
            Upload Form
          </button>
          <button 
            className={`tab-btn ${currentPage === 'gallery' ? 'active' : ''}`}
            onClick={() => setCurrentPage('gallery')}
          >
            Gallery View
          </button>
        </nav>
      </header>

      <main className="main-content">
        {currentPage === 'upload' ? (
          <UploadPage onNavigate={setCurrentPage} />
        ) : (
          <GalleryPage />
        )}
      </main>
    </div>
  );
}

export default App;
