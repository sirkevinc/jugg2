import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Landing.module.css'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Juggarnaut 151</title>
        <meta name="description" content="Juggarnaut 151 Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.landing__container}>
        <span className={styles.landing__logo}>Juggarnaut 151</span>
        <video autoPlay loop className={styles.landing__video}>
          <source src="/assets/videos/360_white_backdrop_animation.mp4" />
        </video>
        {/* <Image 
          src={"/assets/msm_logo.jpg"} 
          width={110} 
          height={210}
          alt="MSM Logo"
          className={styles.landing__msm_logo}
        /> */}
        <Link href="/home">Enter</Link>
      </main>
    </>
  )
}
