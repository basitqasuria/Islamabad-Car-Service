
import { ArrowUpRight } from 'lucide-react';
import styles from '../css/ServiceCard.module.css';

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={26} strokeWidth={1.8} />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <div className={styles.cardFooter}>
        <span>Professional Service</span>
        <ArrowUpRight size={19} />
      </div>
    </article>
  );
}

export default ServiceCard;
