import Layout from '../components/layout'

export default function Contact() {
    return (
        <main>
            Works
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