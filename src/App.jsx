import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          <Hero/>
          <Services/>
          <Products/>
        </div>
      </div>
     
    </div>
  )
}

export default App
