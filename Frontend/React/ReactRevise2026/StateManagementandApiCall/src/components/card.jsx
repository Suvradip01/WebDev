import React from 'react'

const Card = ({ images = [] }) => {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '16px' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            width: '300px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img src={image.src} alt={image.alt} style={{ width: '100%', display: 'block' }} />
          <div style={{ padding: '12px' }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '1rem' }}>{image.alt}</h3>
            <p style={{ margin: 0, color: '#555' }}>This is a sample image card description.</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card