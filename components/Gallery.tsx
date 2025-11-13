import React, { useState, useEffect } from 'react';
import { GalleryImage } from '../types';
import { fetchGallery } from '../services/apiService';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchGallery();
        setImages(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch gallery images.');
      } finally {
        setLoading(false);
      }
    };
    loadGallery();
  }, []);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // ensure overflow is reset on unmount
    };
  }, []);

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-shadow-dark">Photo Gallery</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded"></div>
      </div>

      {loading && <p className="text-center text-white">Loading gallery...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg"
                  onClick={() => openModal(image.imageUrl)}
                >
                  <img 
                    src={image.imageUrl} 
                    alt={image.altText} 
                    className="w-full h-full object-cover aspect-square transition-transform duration-300 transform group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-bold">View</p>
                  </div>
                </div>
              ))
          }
        </div>
      )}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="rounded-lg shadow-2xl object-contain max-w-full max-h-[90vh]" 
            />
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 md:top-2 md:right-2 text-white bg-gray-800/50 rounded-full p-2 hover:bg-gray-700 transition-colors"
              aria-label="Close image view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;