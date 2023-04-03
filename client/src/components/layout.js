import Navbar from "./navbar"
import Footer from "./footer"

import Image from "next/image"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="logo__container">
        <Image
          className="logo"
          src="/assets/images/juggarnaut_logo.jpg"
          height={150}
          width={200}
          />
      </div>
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