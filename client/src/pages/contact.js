import Layout from '../components/layout'
import ContactForm from '@/components/contactForm'
import styles from "../styles/Contact.module.css"
import Image from 'next/image'

export default function Contact() {
    return (
        <main className={styles.contact__container}>
            <h1>Contact</h1>
            <Image 
              src="/assets/images/subscribe.jpg"
              width={600}
              height={400}
            />
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