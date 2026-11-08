
import { MapPin, MessageCircle, Clock } from 'lucide-react';
import styles from '../css/WhyChooseUs.module.css';

const features = [
  {
    icon: MapPin,
    title: 'At Your Location',
    description: 'Get car repair assistance wherever you are in Islamabad.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Contact',
    description: 'Contact Reyan Ali directly through WhatsApp or phone.',
  },
  {
    icon: Clock,
    title: 'Easy to Reach',
    description: 'Explain your car problem and discuss the service you need.',
  },
];

function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <div className={styles.heading}>
          <span>WHY CONTACT REYAN ALI</span>
          <h2>Car Help Made Simple</h2>
        </div>

        <div className={styles.features}>
          {features.map(({ icon: Icon, title, description }) => (
            <article className={styles.feature} key={title}>
              <Icon size={25} className={styles.icon} />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
