import Layout from '../components/layout'
import Image from 'next/image'
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <main className={styles.about__container}>
            <h2>About</h2>
            <div className={styles.about__content}>
              <Image 
                src="/assets/images/about_background.png"
                width={600}
                height={400}
              />
              {/* <img src="/assets/images/shiv_portrait.jpg" /> */}
              <div className={styles.about__content_text}>

              <p>Juggarnaut 151 was created to be the sophistication and maturing of Million dollar mind. Jugganath being my real middle name and which was also my grandfathers. I have an indian background and wanted to express my culture from a western perspective. The name juggernaut in India   and in comparison to the west have different spellings and meanings. In India is means “god of the universe” and in western culture it means someone or something larger than life, strong, unstoppable. These two different meaning share similarities.. I want it to interrupt as master of ones own universe, being the best you can be at whatever you are doing and to believe we have the ability to reach your dreams</p>
              </div>
            </div>
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