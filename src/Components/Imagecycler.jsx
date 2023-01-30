import React, { useState, useEffect } from 'react'

const ImageCycler = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((currentImage + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [currentImage, images.length]);

  const styles = {
    width:'550px',
    height:'360px'
  }
  return (
    <div>
      <img src={images[currentImage]} alt='Image' style={styles}/>
    </div>
  );
};

export default ImageCycler;