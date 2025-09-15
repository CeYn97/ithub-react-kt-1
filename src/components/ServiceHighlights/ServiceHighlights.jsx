import styles from './ServiceHighlights.module.css';

const ServiceHighlights = ({ services }) => {
  return (
    <section className={styles.serviceHighlights}>
      <div className={styles.container}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceBlock} style={{ backgroundColor: service.backgroundColor }}>
              <div className={styles.serviceLine}></div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
