
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Wrench,
} from 'lucide-react';

import styles from '../css/HomeHero.module.css';

function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>

          <div className={styles.eyebrow}>
            <span className={styles.statusDot}></span>
            <span>YOUR TRUSTED CAR MECHANIC IN ISLAMABAD</span>
          </div>

          <h1 className={styles.title}>
            Car Trouble?
            <br />
            We're Here to
            <span> Help You.</span>
          </h1>

          <p className={styles.description}>
            Car won't start? Facing an unexpected breakdown?
            Get reliable on-site car repair and roadside
            assistance anywhere in Islamabad.
          </p>

          <div className={styles.actions}>
            <Link to="/contact" className={styles.primaryButton}>
              Get Help Now
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/services" className={styles.secondaryButton}>
              Explore Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <CheckCircle2 size={19} />
              <span>Reliable Service</span>
            </div>

            <div className={styles.trustItem}>
              <MapPin size={19} />
              <span>Islamabad Coverage</span>
            </div>

            <div className={styles.trustItem}>
              <Wrench size={19} />
              <span>On-Site Repairs</span>
            </div>
          </div>
        </div>

        <div className={styles.heroBadge}>
          <div className={styles.badgeIcon}>
            <Clock3 size={23} />
          </div>

          <div>
            <strong>Need Help?</strong>
            <span>We're just a call away.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
