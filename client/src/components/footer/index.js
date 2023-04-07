import styles from "../../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer__container}>
            <span>Juggarnaut 151</span>
            <a href="https://instagram.com">
                <img 
                    src="/assets/icons8-instagram.svg"
                    alt="Instagram Logo"
                />
            </a>
        </footer>
    )
}