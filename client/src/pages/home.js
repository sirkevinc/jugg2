import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import Layout from '../components/layout'
import Image from 'next/image'
export default function Home() {
    return (
        <>
            <Head>
            <title>Juggarnaut 151</title>
            <meta name="description" content="Some text" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.home__container}>
              <div className={styles.hero_image__wrapper}>
                  <Image
                    className={styles.image}
                    priority
                    src="/assets/images/hero_image.jpg"
                    fill
                    objectFit="cover"
                    alt="Product collage"
                  />
              </div>
              <div className={styles.home__bottom_content}>
                <div>
                  <p>Test Bottom Content</p>
                </div>
              </div>
            </main>
        </>
    )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}