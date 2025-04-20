import React, { useState, useEffect, useCallback } from 'react';
import './ImageModal.css';

const ImageModal = ({ images, startIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  
  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (e.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  }, [images, onClose]);

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Restore scrolling on unmount
    };
  }, [handleKeyDown]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Stop event propagation to prevent modal from closing when clicking content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        <div className="modal-body">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt || 'Project image'}
            className="modal-image"
          />
          {images[currentIndex].caption && (
            <p className="image-caption">{images[currentIndex].caption}</p>
          )}
        </div>
        
        <div className="modal-navigation">
          <button className="nav-btn" onClick={prevImage}>
            &larr;
          </button>
          <span className="image-counter">
            {currentIndex + 1} / {images.length}
          </span>
          <button className="nav-btn" onClick={nextImage}>
            &rarr;
          </button>
        </div>

        <div className="thumbnail-container">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={image.src} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;