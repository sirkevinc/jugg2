import styles from "../../styles/Footer.module.css"

export default function Footer() {
    console.log(process.env.FORM_URL)
    return (
        <footer className={styles.footer__container}>
            <span>Juggarnaut 151</span>
            <span>instagram thing</span>
        </footer>
    )
}