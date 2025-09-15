import styles from './Offer.module.css';
import offer from '/offer.png'

const WhatWeOffer = ({ title, description, image }) => {
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

export default WhatWeOffer;
