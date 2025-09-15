import styles from './BikeRental.module.css';

const BikeRental = ({ title, description, image }) => {
  return (
    <section className={styles.bikeRental}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContent}>
            <div className={styles.bikesImage}>
              <div className={styles.bikesPlaceholder}>
                🚴‍♂️🚴‍♀️🚴‍♂️
              </div>
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
