import styles from "../../styles/Hamburger.module.css"
import Link from "next/link";
// import { slide as Menu } from "react-burger-menu"

export default function Hamburger({ status, setToggle }) {
    return (
        <div className={styles.sidebar__container}>
            {!status ?
                <div className={styles.hamburger}>
                    <div className={styles.burger} />
                    <div className={styles.burger} />
                    <div className={styles.burger} />
                </div>
                :
                <div className={styles.hamburger__sidebar}>
                    <Menu>
                        <li><Link href="/home" className={styles.nav__link}>Home</Link></li>
                        <li><Link href="/works" className={styles.nav__link}>Works</Link></li>
                        <li><Link href="/about" className={styles.nav__link}>About</Link></li>
                        <li><Link href="contact" className={styles.nav__link}>Contact</Link></li>
                    </Menu>
                </div>
            }
        </div>
    )
}