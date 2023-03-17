import Layout from '../components/layout'

export default function About() {
    return (
        <main>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Odio eu feugiat pretium nibh. Lacus vel facilisis volutpat est velit egestas dui. Ultrices in iaculis nunc sed augue lacus viverra vitae.</p>
        </main>
    )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}