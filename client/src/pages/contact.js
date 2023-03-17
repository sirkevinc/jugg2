import Layout from '../components/layout'
import ContactForm from '@/components/contactForm'
import styles from "../styles/Contact.module.css"

export default function Contact() {
    return (
        <main className={styles.contact__container}>
            Contact
            <ContactForm />
        </main>
    )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}