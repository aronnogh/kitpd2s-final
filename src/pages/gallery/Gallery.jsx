import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/json/images.json');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <img
              src={image.url}
              alt={image.title || `Image ${index + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            {image.title && (
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="mt-2 text-sm text-gray-600">
                    {image.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;