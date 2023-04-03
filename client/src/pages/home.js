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
              <div className={styles.home__logo_container}>
                <Image
                  className={styles.home__logo}
                  src="/assets/images/juggarnaut_logo.jpg"
                  height={150}
                  width={200}
                  />
              </div>
              {/* <h1>Homepage</h1> */}
              <div className={styles.hero__wrapper}>
                <div className={styles.hero_image__wrapper}>
                {/* <Image
                  priority
                  src="/assets/images/hero_image.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="hero image"
                  /> */}
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