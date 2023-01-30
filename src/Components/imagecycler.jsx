import React, { useState, useEffect } from 'react'

const imageCycler = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((currentImage + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [currentImage, images.length]);

  return (
    <div>
      <img src={images[currentImage]} alt='Image' />
    </div>
  );
};

export default imagecycler