import Link from "next/link"
import styles from "../../styles/Navbar.module.css"

export default function Navbar() {
    return(
        <nav className={styles.nav__container}>
            <ul className={styles.nav__links}>
                <li><Link href="/home" className={styles.nav__link}>Home</Link></li>
                <li><Link href="/works" className={styles.nav__link}>Works</Link></li>
                <li><Link href="/about" className={styles.nav__link}>About</Link></li>
                <li><Link href="contact" className={styles.nav__link}>Contact</Link></li>
            </ul>
        </nav>
    )
}