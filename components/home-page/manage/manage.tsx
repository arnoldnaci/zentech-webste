import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import img from "../../../public/manage-it.png";

const Manage = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.content}> 
          <h1 className={styles.title}>
            We manage your <span className={styles.bold}>IT</span>, so you can
            manage your <span className={styles.bold}>business.</span>
          </h1>
          <div className={styles.contentDiv}>
            <span className={styles.description}>
              Take charge of your business{" "}
              <p>continuity with innovative IT solutions.</p>
            </span>
            <div className={styles.btnDiv}>
              <Link className={styles.services} href={"/services"}>Our services</Link>
              <Link className={styles.contact}  href={"/contact"}>Contact now</Link>
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <Image src={img} alt={""} />
        </div>
      </div>
    </>
  );
};

export default Manage;
