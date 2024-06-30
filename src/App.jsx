import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         
          <Navbar/>
        </div>
      </div>
     
    </div>
  )
}

export default App
