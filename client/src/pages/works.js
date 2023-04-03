import Layout from '../components/layout'
import Image from 'next/image'
import styles from "../styles/Works.module.css"

export default function Works() {
    return (
        <main className={styles.works__container}>
          <h1 className="page_header">Works in Progress</h1>
              <div className={styles.works__wrapper}>
                  <Image
                    className={styles.image}
                    priority
                    src="/assets/wip/wip1.jpg"
                    fill
                    objectFit="cover"
                    alt="Product collage"
                  />
              </div>
              <div className={styles.works__wrapper}>
                  <Image
                    className={styles.image}
                    priority
                    src="/assets/wip/wip2.jpg"
                    fill
                    objectFit="cover"
                    alt="Product collage"
                  />
              </div>
              <div className={styles.works__wrapper}>
                  <Image
                    className={styles.image}
                    priority
                    src="/assets/wip/wip3.jpg"
                    fill
                    objectFit="cover"
                    alt="Product collage"
                  />
              </div>
              <div className={styles.works__wrapper}>
                  <Image
                    className={styles.image}
                    priority
                    src="/assets/wip/wip4.jpg"
                    fill
                    objectFit="cover"
                    alt="Product collage"
                  />
              </div>
              <div className={styles.works__wrapper}>
                  <Image
                    className={styles.image}
                    priority
                    src="/assets/wip/wip5.jpg"
                    fill
                    objectFit="cover"
                    alt="Product collage"
                  />
              </div>
        </main>
    )
}

Works.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}