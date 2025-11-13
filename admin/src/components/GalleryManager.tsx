
import React, { useState, useEffect } from 'react';
import { GalleryImage } from '../types';
import * as api from '../services/api';

interface GalleryManagerProps {
  token: string;
}

const GalleryManager: React.FC<GalleryManagerProps> = ({ token }) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [newImage, setNewImage] = useState({ imageUrl: '', altText: '' });

  const refreshGallery = () => api.fetchGallery().then(setImages);

  useEffect(() => {
    refreshGallery();
  }, []);
  
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.addImage(newImage, token);
    setNewImage({ imageUrl: '', altText: '' });
    refreshGallery();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      await api.deleteImage(id, token);
      refreshGallery();
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Manage Gallery</h2>
       {/* Add Image Form */}
      <form onSubmit={handleAdd} className="mb-6 p-4 border rounded space-y-3">
        <h3 className="font-medium">Add New Image</h3>
        <input value={newImage.imageUrl} onChange={e => setNewImage({...newImage, imageUrl: e.target.value})} placeholder="Image URL" className="w-full p-2 border rounded" required />
        <input value={newImage.altText} onChange={e => setNewImage({...newImage, altText: e.target.value})} placeholder="Alt Text" className="w-full p-2 border rounded" required />
        <button type="submit" className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md">Add Image</button>
      </form>
      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map(img => (
          <div key={img.id} className="relative">
            <img src={img.imageUrl} alt={img.altText} className="w-full h-24 object-cover rounded" />
            <button onClick={() => handleDelete(img.id)} className="absolute top-1 right-1 px-2 py-0.5 text-xs text-white bg-red-600 rounded-full">&times;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryManager;
