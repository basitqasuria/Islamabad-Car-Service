import { Link } from "react-router-dom";
import {
  CarFront,
  BatteryCharging,
  Activity,
  Zap,
  Wrench,
  Truck,
  Search,
  Gauge,
  MessageCircle,
  MapPin,
  Thermometer,
  ScanSearch,
  ShieldCheck,
  Settings,
} from "lucide-react";

import styles from "../css/ServicesPage.module.css";
import openWhatsAppWithLocation from "../../../utils/openWhatsAppWithLocation";

const services = [
  {
    icon: CarFront,
    title: "Car Not Starting",
    description: "Help with common car starting and engine problems.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Problems",
    description: "Assistance with weak batteries and battery issues.",
  },
  {
    icon: BatteryCharging,
    title: "Hybrid Battery Diagnostics",
    description: "Hybrid battery inspection and fault diagnosis.",
  },
  {
    icon: Activity,
    title: "Engine Diagnostics",
    description: "Identify engine problems and warning light issues.",
  },
  {
    icon: Thermometer,
    title: "Car AC & Heater",
    description: "AC cooling, heating and climate-control problems.",
  },
  {
    icon: ScanSearch,
    title: "Computerized Car Scanning",
    description: "Check vehicle fault codes using diagnostic scanners.",
  },
  {
    icon: ShieldCheck,
    title: "ABS Diagnostics",
    description: "Diagnose ABS warning lights and braking system faults.",
  },
  {
    icon: Settings,
    title: "Engine Tuning",
    description: "Engine performance checks and tuning-related issues.",
  },
  {
    icon: Zap,
    title: "Electrical Repairs",
    description: "Help with common vehicle electrical problems.",
  },
  {
    icon: Truck,
    title: "Roadside Assistance",
    description: "Car repair assistance at your location in Islamabad.",
  },
  {
    icon: Wrench,
    title: "General Car Repairs",
    description: "Help with common mechanical problems.",
  },
  {
    icon: Search,
    title: "Mechanical Inspection",
    description: "Check your vehicle for visible mechanical issues.",
  },
  {
    icon: Gauge,
    title: "Performance Issues",
    description: "Assistance with unusual vehicle performance.",
  },
];

function ServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className="container">
          <span className={styles.eyebrow}>CAR REPAIR SERVICES</span>

          <h1>How Can We Help You?</h1>

          <p>
            Contact Reyan Ali for car repair assistance at your location in
            Islamabad.
          </p>

          <div className={styles.location}>
            <MapPin size={17} />
            Islamabad, Pakistan
          </div>
        </div>
      </section>

      <section className={`container ${styles.servicesSection}`}>
        <div className={styles.grid}>
          {services.map(({ icon: Icon, title, description }) => {
            const message = encodeURIComponent(
              `Assalamualaikum Reyan Ali! Mujhe ${title} ki service chahiye.`,
            );

            return (
              <article className={styles.card} key={title}>
                <Icon size={25} className={styles.icon} />

                <h2>{title}</h2>
                <p>{description}</p>

                <a
                  href={`https://wa.me/923159973713?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  onClick={(event) => {
                    event.preventDefault();

                    openWhatsAppWithLocation(
                      `Assalamualaikum Reyan Ali! Mujhe ${title} ki service chahiye. Please meri location par aane ke liye guide karein.`,
                    );
                  }}
                >
                  <MessageCircle size={17} />
                  Ask on WhatsApp
                </a>
              </article>
            );
          })}
        </div>

        <div className={styles.bottomLink}>
          <Link to="/contact">View Contact Details</Link>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
