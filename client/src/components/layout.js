import Navbar from "./navbar"
import Footer from "./footer"
import Sidebar from "./sidebar"

import Image from "next/image"
// import styles from "../styles/Landing.module.css"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <main>{children}</main>
      <Image 
          src={"/assets/msm_logo.jpg"} 
          width={80} 
          height={150}
          alt="MSM Logo"
          className="rotating_msm_logo"
        />
      <Footer />
    </>
  )
}