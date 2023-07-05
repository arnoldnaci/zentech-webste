import Link from "next/link";
import styles from "./styles.module.css";

type NavColumnType = {
  closeMenu: () => void;
  openMenu: () => void;
};

const NavListColumn = ({ openMenu, closeMenu }: NavColumnType) => {
  return (
    <> 
      <div className={styles.mainDiv}> 
        <ul className={styles.navContent}>
          <Link
            className={styles.link}
            href={"/about-us"}
            onClick={() => closeMenu()}
          >
           Who we are
          </Link>
          <Link
            className={styles.link}
            href={"services"}
            onClick={() => closeMenu()}
          >
           What we do
          </Link>
          <Link
            className={styles.link}
            href={"/contact"}
            onClick={() => closeMenu()}
          >
            Contact
          </Link>

          <Link
            className={styles.btn}
            href={"/contact"}
            onClick={() => closeMenu()}
          >
            Hire experts
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavListColumn;
