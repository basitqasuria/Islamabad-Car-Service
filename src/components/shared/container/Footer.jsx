
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import styles from '../css/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              REYAN <span>ALI.</span>
            </Link>

            <p>
              Car repair assistance at your location in Islamabad, Pakistan.
            </p>
          </div>

          <div className={styles.links}>
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>

            <a href="tel:03159973713">
              <Phone size={16} />
              03159973713
            </a>

            <a href="mailto:brotherautoscenter30@gmail.com">
              <Mail size={16} />
              brotherautoscenter30@gmail.com
            </a>

            <a
              href="https://wa.me/923159973713"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            <p>
              <MapPin size={16} />
              Islamabad, Pakistan
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} Reyan Ali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
