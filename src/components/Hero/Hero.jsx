import styles from './Hero.module.css';
import dino from '/dino.svg'

const Hero = ({ title, description, image }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.dinosaurImage}>
              <img src={dino} alt="bikePhoto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
