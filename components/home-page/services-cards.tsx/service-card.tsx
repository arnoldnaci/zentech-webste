import styles from "./styles.module.css";
import Image from "next/image";

type ServiceCardType = {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
};

const ServiceCard = ({
  id,
  iconUrl,
  title,
  description,
}: ServiceCardType): JSX.Element => {
  return (
    <div key={id} className={styles.container}>
      <Image
        src={iconUrl}
        alt={""}
        className={styles.image}
        width={40}
        height={40}
      />
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default ServiceCard;
