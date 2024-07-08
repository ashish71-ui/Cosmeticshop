import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => 
  (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div/>
      <div className='flex w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>What pople are <br className='sm:block hidden '/> saying about us </h1>
<div className='w-full md:mt-0 mt-6'>
  <p className={`${styles.paragraph} text-left max-w-[450px]`}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nam, nesciunt pariatur iure nulla totam dolorem ipsum eaque at fuga.
  </p>

</div>
      </div>
      <div className='flex flex-wrap w-full sm:justify-start justify-center feedback-container relative z-[1]'>
        {feedback.map((card)=>(
<FeedbackCard key={card.id} {...card}/>
        ))}

      </div>
    </section >
  )


export default Testimonials
