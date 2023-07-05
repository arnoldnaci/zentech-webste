import Image from "next/image";
import styles from "./styles.module.css";
import phone from "../../../public/icons/phone.svg";
import mail from "../../../public/icons/mail.svg";
import image from "../../../public/our-team.png";

const MainSection = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>
            Get in touch with <span className={styles.bold}>our team</span>
          </h1>
          <span className={styles.description}>
            We would love to hear from you and discuss how our team at ZENTECH
            can assist you.
          </span>
        </div>
        <div className={styles.social}>
          <div className={styles.socialDiv}>
            <Image src={phone} alt={"phone icon"} />
            <span className={styles.socialInfo}>65474573574</span>
          </div>
          <div className={styles.socialDiv}>
            <Image src={mail} alt={"mail icon"} />
            <span className={styles.socialInfo}>zentech@zentech</span>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <Image src={image} alt={""} />
      </div>
    </>
  );
};

export default MainSection;
