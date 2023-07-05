import Image from "next/image";
import styles from "./styles.module.css";
import image from "../../../public/services.png";

const MainSection = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}>
        <h1 className={styles.title}>
          Why choose <span className={styles.bold}>services</span> from{" "}
          <span className={styles.bold}>ZENTECH</span>
        </h1>
        <span className={styles.description}>
          Expertise and Experience: ZENTECH has a team of highly skilled
          professionals with extensive expertise and experience in their
          respective fields. Whether it's software development, digital
          marketing, or IT consulting, our team has the knowledge and skills to
          deliver exceptional results.
        </span>
      </div>
      <div className={styles.img}>
        <Image src={image} alt={""} />
      </div>
    </div>
  );
};

export default MainSection;
