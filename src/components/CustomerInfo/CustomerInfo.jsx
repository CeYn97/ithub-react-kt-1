import styles from './CustomerInfo.module.css';

const CustomerInfo = ({ paragraphs }) => {
  return (
    <section className={styles.customerInfo}>
      <div className={styles.container}>
        <div className={styles.content}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerInfo;
