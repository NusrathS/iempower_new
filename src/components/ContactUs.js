import React, { useState } from 'react';
import styles from './ContactUs.css';

const ContactUs = () => {
  const [imageSize, setImageSize] = useState(200); // Default size in pixels

  const handleSizeChange = (event) => {
    setImageSize(Number(event.target.value));
  };

  return (
    <div className={styles.container}>
      <h1 className="contact">
      <span className="contact1">Contact</span> Us
      </h1>
      <div className={styles.imageContainer}>
        <img 
          src="/Contact.png" 
          alt="Contact Us" 
          style={{ width: `1200px`, height: 'auto' }}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ContactUs;