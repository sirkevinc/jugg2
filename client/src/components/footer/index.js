import styles from "../../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer__container}>
            <span>Juggarnaut 151</span>
            <span>
                <img src="/assets/icons8-instagram.svg"/> Test
                {/* <span>instagram thing</span> */}
            </span>
        </footer>
    )
}