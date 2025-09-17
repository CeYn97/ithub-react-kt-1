import React from 'react';
import styles from './BikeRental.module.css';
import bikesImage from '/bikes.png';
import type { BikeRentalProps } from '../../types';

const BikeRental: React.FC<BikeRentalProps> = ({ title, description }) => {
  return (
    <section className={styles.bikeRental}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContent}>
            <div className={styles.bikesImage}>
              <img src={bikesImage} alt="Bikes for rent" />
            </div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeRental;
