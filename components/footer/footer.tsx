import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Facebook from "../../public/icons/facebook.svg";
import Instagram from "../../public/icons/instagram.svg";
import Linkedin from "../../public/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}>
        <div className={styles.logoDiv}>
          <Image src={Logo} alt={"Footer logo"} />
          <h1 className={styles.description}>
            One-stop <span className={styles.bold}>solution</span>
          </h1>
        </div>
        <div className={styles.linkDiv}>
          <span className={styles.title}>Links</span>
          <Link className={styles.link} href={"/about-us"}>
            Who we are
          </Link>
          <Link className={styles.link} href={"/services"}>
            What we do
          </Link>
          <Link className={styles.link} href={"/contact"}>
            Contact
          </Link>
        </div>
        <div className={styles.infoDiv}>
          <span className={styles.infoTitle}>Contact informations</span>
          <Link className={styles.link} href={"/"}>
            zentech@zentech
          </Link>
          <Link className={styles.link} href={"/"}>
            +355 123456789
          </Link>
        </div>
        <div className={styles.socialMediaDiv}>
          <span className={styles.socialTitle}>Social media</span>
          <div className={styles.iconDiv}>
            <Image src={Facebook} alt={"Facebook icon"} />
            <Image src={Instagram} alt={"Instagram icon"} />
            <Image src={Linkedin} alt={"Linkedin icon"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
