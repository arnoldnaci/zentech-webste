"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import styles from "./styles.module.css";
import Menu from "../../public/icons/menu.svg";
import Close from "../../public/icons/close.svg";
import NavListColumn from "./nav-list-column/nav-list-column";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setOpen((prev) => !prev);
  };

  const handleCloseMenu = (): void => {
    setOpen(false);
  };

  const handleOpenMenu = (): void => {
    setOpen(true);
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}>
        <Link href={"/home"}>
          <Image className={styles.logo} src={logo} alt={""} />
        </Link>

        <button className={styles.toggleBtn} onClick={handleToggle}>
          {open ? (
            <Image className={styles.close} src={Close} alt={""} />
          ) : (
            <Image className={styles.menu} src={Menu} alt={""} />
          )}
        </button>
        <ul className={styles.navContent}>
          <li>
            <Link className={styles.navLink} href="/about-us">
              Who we are
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/services">
              What we do
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/contact">
              Contact
            </Link>
          </li>
          <Link className={styles.btn} href="/contact"> 
              Hire experts
            </Link>
        </ul>
      </div>
      {open && (
        <NavListColumn
          closeMenu={() => handleCloseMenu()}
          openMenu={() => handleOpenMenu()}
        />
      )}
    </div>
  );
};

export default Navbar;
