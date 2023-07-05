import Image from "next/image";
import styles from "./styles.module.css";
import image from "../../../public/services.png";
import Link from "next/link";

const Description = () => {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>
        We started in 2020 as a small team of{" "}
        <span className={styles.bold}>passionate developers</span>
      </h1>
      <span className={styles.description}>
        We started in 2020 as a small team of passionate developers with a
        shared vision of creating impactful solutions for our clients. Despite
        our humble beginnings, we quickly gained recognition for our expertise
        and dedication to delivering high-quality results. As our reputation
        grew, so did our team. We expanded our roster of talented individuals
        who bring diverse skills and perspectives to the table. This growth has
        allowed us to tackle increasingly complex projects and offer a wider
        range of services to our ever-expanding client base.
      </span>
    </div>
  );
};

export default Description;
