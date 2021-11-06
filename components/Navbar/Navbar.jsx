import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const navLinks = [
    { Home: "/" },
    { Services: "/services" },
    { Portfolio: "/portfolio" },
    { "About Us": "/aboutus" },
    { "Latitude Study": "/latitudestudy" },
    { Contact: "/contact" },
    { Linkedin: "/linkedin" },
  ];
  return (
    <>
      <nav className={styles.navDiv}>
        <Image
          src="/svg/logo.svg"
          alt="Griffin Energ Consulting"
          height={70}
          width={400}
          className={styles.logo}
        />
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={Object.values(link)[0]}>
              <Link href={Object.values(link)[0]}>
                <a>{Object.keys(link)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
