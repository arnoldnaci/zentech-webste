import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import Img from "../../../public/hero-img.png";

const Hero = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}>  
        <h1 className={styles.title}>
          We are a top-notch <span className={styles.bold}>development</span>{" "}
          agency.
        </h1>
        <span className={styles.description}>
          We are a top-notch development agency, dedicated to delivering
          exceptional solutions tailored to meet our clients' needs. With a team
          of highly skilled and experienced developers, designers, and project
          managers, we strive to create innovative and cutting-edge products
          that drive success for businesses across various industries.
        </span>
        <div className={styles.btnDiv}>
          <Link className={styles.btn} href={"/contact"}>Contact now</Link>
          <Link className={styles.btn2} href={"/services"}>Our services</Link>
        </div>
      </div>
      <Image className={styles.img} src={Img} alt={"Hero Image"} />
    </div>
  );
};

export default Hero;
