
import { Link } from 'react-router-dom';
import {
  CarFront,
  BatteryCharging,
  Activity,
  Wrench,
  ArrowRight,
} from 'lucide-react';

import styles from '../css/ServicesPreview.module.css';

const services = [
  {
    icon: CarFront,
    title: 'Car Not Starting',
    description: 'Help with starting problems and engine issues.',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Problems',
    description: 'Battery checking and related electrical issues.',
  },
  {
    icon: Activity,
    title: 'Engine Diagnostics',
    description: 'Finding the cause of warning lights and faults.',
  },
  {
    icon: Wrench,
    title: 'General Repairs',
    description: 'Practical solutions for common car problems.',
  },
];

function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>WHAT WE CAN HELP WITH</span>
          <h2>Car Repair Services</h2>
          <p>
            Get help with common car problems at your location in Islamabad.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map(({ icon: Icon, title, description }) => (
            <article className={styles.service} key={title}>
              <div className={styles.icon}>
                <Icon size={23} />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <Link to="/services" className={styles.viewAll}>
          View All Services
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default ServicesPreview;
