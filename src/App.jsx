import React from 'react';
import styles from './style';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <Navbar />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="shopping">
            <Products />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
