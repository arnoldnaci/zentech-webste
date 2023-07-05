import Link from "next/link";
import ServiceCard from "../services-cards.tsx/service-card";
import { serviceCardList } from "../services-cards.tsx/service-data";
import styles from "./styles.module.css";

const MainServices = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>
          The <span className={styles.bold}>core values</span> that drive
          everything we do
        </h1> 
        <div className={styles.servicesContainer}>
          {serviceCardList.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              iconUrl={service.iconUrl}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainServices;
