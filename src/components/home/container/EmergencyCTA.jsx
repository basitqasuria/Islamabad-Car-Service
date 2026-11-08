
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import openWhatsAppWithLocation from '../../../utils/openWhatsAppWithLocation';
import styles from '../css/EmergencyCTA.module.css';

function EmergencyCTA() {
  const whatsappMessage =
    'Assalamualaikum Reyan Ali! Mujhe Islamabad mein car repair service chahiye. Kya aap meri location par aa sakte hain?';

  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <MapPin size={26} className={styles.locationIcon} />

        <h2>Need Help With Your Car?</h2>

        <p>
          Contact Reyan Ali for car repair assistance at your location
          in Islamabad.
        </p>

        <div className={styles.actions}>
          <a
            href={`https://wa.me/923159973713?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
            onClick={(event) => {
              event.preventDefault();
              openWhatsAppWithLocation(whatsappMessage);
            }}
          >
            <MessageCircle size={19} />
            WhatsApp Now
          </a>

          <a href="tel:03159973713" className={styles.call}>
            <Phone size={19} />
            Call 03159973713
          </a>
        </div>
      </div>
    </section>
  );
}

export default EmergencyCTA;
