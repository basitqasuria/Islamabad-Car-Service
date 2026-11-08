import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

import styles from "../css/ContactPage.module.css";
import openWhatsAppWithLocation from "../../../utils/openWhatsAppWithLocation";

function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className="container">
          <span className={styles.eyebrow}>GET IN TOUCH</span>

          <h1>Contact Reyan Ali</h1>

          <p>Need car repair help in Islamabad? Get in touch directly.</p>
        </div>
      </section>

      <section className={`container ${styles.contactSection}`}>
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <Phone size={23} />

            <div>
              <h2>Call Directly</h2>
              <p>Speak with Reyan Ali about your car problem.</p>

              <a href="tel:03159973713">03159973713</a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <MessageCircle size={23} />

            <div>
              <h2>WhatsApp</h2>
              <p>Send your car problem and share your location.</p>

              <a
                href="https://wa.me/923159973713"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => {
                  event.preventDefault();

                  openWhatsAppWithLocation(
                    "Assalamualaikum Reyan Ali! Mujhe Islamabad mein car repair service chahiye. Please meri location par aane ke liye guide karein.",
                  );
                }}
              >
                Open WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <Mail size={23} />

            <div>
              <h2>Email</h2>
              <p>Send an email for service enquiries.</p>

              <a href="mailto:brotherautoscenter30@gmail.com">
                brotherautoscenter30@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.locationCard}>
          <MapPin size={28} />

          <h2>Service Area</h2>

          <p>Islamabad, Pakistan</p>

          <p>On-site car repair assistance at your location in Islamabad.</p>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
