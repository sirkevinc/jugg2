import Link from "next/link"
import styles from "../../styles/Navbar.module.css"
import Hamburger from "../hamburger"
import { useState, useEffect } from "react"

import useWindowDimensions from "../../../util/useWindowDimensions"
import { slide as Menu } from 'react-burger-menu'

export default function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [width, setWidth] = useState();
    const [containerClass, setContainerClass] = useState(styles.nav__container);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    const dimensions = useWindowDimensions();

    useEffect(() => {
        if (dimensions) {
            setWidth(dimensions.width);
            if (width > 780) {
                setHamburgerOpen(false);
                setContainerClass(styles.nav__container);
            } else if (width < 780) {
                setContainerClass(styles.nav__container_burger)
            }
        }
    }, [ dimensions ]);

    return(
        <nav className={containerClass}>
            {width > 780 ? 
                <ul className={styles.nav__links}>
                    <li><Link href="/home" className={styles.nav__link}>Home</Link></li>
                    <li><Link href="/works" className={styles.nav__link}>Works</Link></li>
                    <li><Link href="/about" className={styles.nav__link}>About</Link></li>
                    <li><Link href="contact" className={styles.nav__link}>Contact</Link></li>
                </ul>
                :
                <div className={styles.hamburger} onClick={toggleHamburger}>
                    <Menu>
                        <li><Link href="/home" className={styles.nav__link}>Home</Link></li>
                        <li><Link href="/works" className={styles.nav__link}>Works</Link></li>
                        <li><Link href="/about" className={styles.nav__link}>About</Link></li>
                        <li><Link href="contact" className={styles.nav__link}>Contact</Link></li>
                    </Menu>
                    {/* <Hamburger status={hamburgerOpen} setToggle={setHamburgerOpen}/> */}
                </div>
            }
        </nav>
    )
}