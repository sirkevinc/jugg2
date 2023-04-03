import Layout from '../components/layout'

export default function Products() {
    return (
        <main>
            Products
        </main>
    )
}

Products.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}