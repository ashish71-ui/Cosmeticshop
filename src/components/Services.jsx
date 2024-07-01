import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import image from '../assets/luxhero4.png'


const FeatureCard = ({ title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-5" : "mb-0"} feature-card w-[450px] `}>
   
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold  text-[24px] leading-[23px] text-gold-light'>{title}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{content}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id='features' className={layout.section}>
     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
  <img src={image} alt="" className="w-[90%] h-[90%] relative z-[5]" />
  <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient"/>
  <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient"/>
  <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient"/>
</div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
