import Layout from '../components/layout'
import ContactForm from '@/components/contactForm'
import styles from "../styles/Contact.module.css"
import Image from 'next/image'

export default function Contact() {
    return (
        <main className={styles.contact__container}>
            <h1 className="page_header">Contact</h1>
            <div className={styles.contact__content}>
              <div className={styles.contact__image_wrapper}>
              <Image
                className={styles.image}
                priority
                src="/assets/images/subscribe.jpg"
                fill
                objectFit="cover"
                alt="Product collage"
              />
              </div>
              <ContactForm />
            </div>
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