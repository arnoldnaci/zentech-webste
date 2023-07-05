import Image from "next/image";
import styles from "./styles.module.css";
import img1 from "../../../public/icons/project.svg";
import img2 from "../../../public/icons/development.svg";
import img3 from "../../../public/icons/launch.svg";

const Process = () => {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>
        We have a simple, yet <span className={styles.bold}>bulletproof</span>{" "}
        and <span className={styles.bold}>effective</span> process.
      </h1>
      <div className={styles.cardDiv}>
        <div className={styles.card}>
          <Image src={img1} alt={"project idea"} /> 
          <span className={styles.cardTitle}>1. Project Idea</span>
          <span>
            By combining the power of artificial intelligence, machine learning,
            and user-centric design, we aim to create a product that not only
            simplifies daily tasks but also enhances productivity and improves
            overall user experience.
          </span>
        </div>
        <div className={styles.card}>
          <Image src={img2} alt={"project idea"} />
          <span className={styles.cardTitle}>2. Development & Execution</span>
          <span>
            In the development and execution phase, we bring our project idea to
            reality. Our experienced development team utilizes the latest
            technologies and frameworks to build a robust and scalable solution.
          </span>
        </div>
        <div className={styles.card}>
          <Image src={img3} alt={"project idea"} />
          <span className={styles.cardTitle}>3. Launch & Scale</span>
          <span>
            By combining the power of artificial intelligence, machine learning,
            and user-centric design, we aim to create a product that not only
            simplifies daily tasks but also enhances productivity and improves
            overall user experience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Process;
