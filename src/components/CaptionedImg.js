import React from 'react';
import styles from './CaptionedImg.module.css';

function CaptionedImg ({ src, alt, caption, className }) {
  return (
    <React.Fragment>
      <img className={`${styles.image} ${className}`} src={src} alt={alt} />
      <small className={styles.caption}>{caption}</small>
    </React.Fragment>
  );
}

export default CaptionedImg;