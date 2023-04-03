import Layout from '../components/layout'
import Image from 'next/image'
import styles from "../styles/Works.module.css"

export default function Works() {
    return (
        <main className={styles.works__container}>
          <h1>Works in Progress</h1>
            <div className={styles.works__images}>
              {/* <div className={styles.works__image}>
                <Image 
                  priority
                  className={styles.works__image}
                  src="/assets/wip/wip1.jpg"
                  fill
                />
              </div>
              <div className={styles.works__image}>
                <Image 
                  priority
                  className={styles.works__image}
                  src="/assets/wip/wip2.jpg"
                  fill
                />
              </div>
              <div className={styles.works__image}>
                <Image 
                  priority
                  className={styles.works__image}
                  src="/assets/wip/wip3.jpg"
                  fill
                />
              </div>
              <div className={styles.works__image}>
                <Image 
                  priority
                  className={styles.works__image}
                  src="/assets/wip/wip4.jpg"
                  fill
                />
              </div>
              <div className={styles.works__image}>
                <Image 
                  priority
                  className={styles.works__image}
                  src="/assets/wip/wip5.jpg"
                  fill
                />
              </div> */}
            {/* <Image 
              priority
              className={styles.works__image}
              src="/assets/wip/wip2.jpg"
              width={600}
              height={400}
              />
            <Image 
              priority
              className={styles.works__image}
              src="/assets/wip/wip3.jpg"
              width={600}
              height={400}
              />
            <Image 
              priority
              className={styles.works__image}
              src="/assets/wip/wip4.jpg"
              width={600}
              height={400}
              />
            <Image 
              priority
              className={styles.works__image}
              src="/assets/wip/wip5.jpg"
              width={600}
              height={400}
              /> */}
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