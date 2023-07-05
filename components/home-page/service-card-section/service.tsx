import Link from "next/link";
import ServiceCard from "../services-cards.tsx/service-card";
import { serviceCardList } from "../services-cards.tsx/service-data";
import styles from "./styles.module.css";

const MainServices = () => {
  return (
    <>
      <div className={styles.mainContainer}> 
        <h1 className={styles.title}>
          We are <span className={styles.bold}>development</span> experts on all{" "}
          <span className={styles.bold}>technologies</span> &{" "}
          <span className={styles.bold}>platforms</span>
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
