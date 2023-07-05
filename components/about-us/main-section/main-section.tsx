import Image from "next/image";
import styles from "./styles.module.css";
import image from "../../../public/services.png";
import Link from "next/link";

const MainSection = () => {
  return ( 
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>
        About <span className={styles.bold}>our agency</span>
      </h1>
      <span className={styles.description}>
        Our agency is a dynamic and innovative organization dedicated to
        providing exceptional services in a wide range of industries.
      </span>
      <Link className={styles.btn} href={"/contact"}>
        Contact now
      </Link>
    </div>
  );
};

export default MainSection;
