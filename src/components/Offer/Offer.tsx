import React from 'react';
import styles from './Offer.module.css';
import offer from '/offer.png'
import type { OfferProps } from '../../types';

const Offer: React.FC<OfferProps> = ({ title, description }) => {
  return (
    <section className={styles.whatWeOffer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.workshopImage}>
                <img src={offer} alt="offerImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
