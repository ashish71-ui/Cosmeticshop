import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700 w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          <Hero/>
          <Services/>
          <Products/>
          <Testimonials/>
          <Footer/>
        </div>
      </div>
     
    </div>
  )
}

export default App
