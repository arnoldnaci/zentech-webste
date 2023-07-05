import Image from "next/image";
import styles from "./styles.module.css";
import left from "../../../public/left-icon.svg"
import right from "../../../public/right-icon.svg"
import Link from "next/link";

const Working = () => {
  return (
    <div className={styles.mainDiv}>
        <Image className={styles.left} src={left} alt={""}/>
      <h1 className={styles.title}>
        Ready to start <span className={styles.bold}>working</span> together
        with <span className={styles.bold}>our team?</span>
      </h1>  
      <Link className={styles.btn} href={"/contact"}>Contact now</Link>
      <Image className={styles.right} src={right} alt={""}/>
    </div>
  );
};

export default Working;
