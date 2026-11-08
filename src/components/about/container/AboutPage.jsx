
import { MapPin, Wrench, MessageCircle } from 'lucide-react';
import styles from '../css/AboutPage.module.css';

function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className="container">
          <span className={styles.eyebrow}>ABOUT US</span>

          <h1>Meet Reyan Ali</h1>

          <p>
            Helping drivers with car repair problems at their location
            in Islamabad, Pakistan.
          </p>
        </div>
      </section>

      <section className={`container ${styles.aboutSection}`}>
        <div className={styles.aboutContent}>
          <span className={styles.label}>YOUR LOCAL CAR MECHANIC</span>

          <h2>Car Repair Made Easier</h2>

          <p>
            Car trouble can happen anywhere. Reyan Ali provides
            car repair assistance at customer locations in Islamabad,
            making it easier to get help without searching for a workshop.
          </p>

          <p>
            Contact directly, explain your car problem and share your
            location to discuss the service you need.
          </p>
        </div>

        <div className={styles.details}>
          <div className={styles.detail}>
            <MapPin size={23} />
            <div>
              <h3>Service Location</h3>
              <p>Islamabad, Pakistan</p>
            </div>
          </div>

          <div className={styles.detail}>
            <Wrench size={23} />
            <div>
              <h3>On-Site Assistance</h3>
              <p>Car repair help at your location.</p>
            </div>
          </div>

          <div className={styles.detail}>
            <MessageCircle size={23} />
            <div>
              <h3>Direct Communication</h3>
              <p>Discuss your car problem directly with Reyan Ali.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
