import Image from "next/image";
import styles from "./styles.module.css";
import image from "../../../public/services.png";
import Link from "next/link";

const Numbers = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}> 
        <h1 className={styles.title}>
          99<span className={styles.bold}>%</span>
        </h1>
        <span className={styles.subTitle}>Customer satisfaction</span>
      </div> 
      <div className={styles.contentDiv}>
        <h1 className={styles.title}>
          100<span className={styles.bold}>+</span>
        </h1>
        <span className={styles.subTitle}>Successful Projects</span>
      </div>
      <div className={styles.contentDiv}>
        <h1 className={styles.title}>
          2<span className={styles.bold}>M</span>
        </h1>
        <span className={styles.subTitle}>Users served</span>
      </div>
      <div className={styles.contentDiv}>
        <h1 className={styles.title}>
          200<span className={styles.bold}>%</span>
        </h1>
        <span className={styles.subTitle}>Company growth</span>
      </div>
    </div>
  );
};

export default Numbers;
