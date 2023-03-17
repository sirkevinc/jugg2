import Layout from '../components/layout'
import ContactForm from '@/components/contactForm'

export default function Contact() {
    return (
        <main>
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