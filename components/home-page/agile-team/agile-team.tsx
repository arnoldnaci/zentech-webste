import Image from "next/image";
import styles from "./styles.module.css";
import check from "../../../public/icons/check.svg";
import agile from "../../../public/agile-team.png";

const Agile = () => {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>
        We are an <span className={styles.bold}>agile</span> team of{" "}
        <span className={styles.bold}>passionate developers</span>
      </h1>
      <div className={styles.checkDiv}>
        <div className={styles.check}>
          <Image src={check} alt={"check icon"} />
          <span className={styles.value}>Deliver your MVP in 4 weeks or less</span>
        </div>
        <div className={styles.check}>
          <Image src={check} alt={"check icon"} />
          <span className={styles.value}>Efficient and scalable infraestructure</span>
        </div>
        <div className={styles.check}>
          <Image src={check} alt={"check icon"} />
          <span className={styles.value}>Affordable cost for startups</span>
        </div>
      </div>
      <Image src={agile} alt={"Agile Team Image"} />
    </div>
  );
};

export default Agile;
