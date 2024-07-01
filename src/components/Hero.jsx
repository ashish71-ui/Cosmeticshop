import React from "react";
import styles from "../style";
import hero from '../assets/luxhero3.png'

const Hero = () => (
  <section id="home" className={"flex md:flex-row flex-col ${styles.paddingY}"}>
    <div
      className={"flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 md:px-6"}
    >
       <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient w-[350px] rounded-[10px] mb-2">
        
        <p className={`${styles.paragraph} ml-2 `}>
          <span className="text-white ">Get all</span> Services for {" "}
          <span className="text-white ">Discounted</span> price
        </p>
      </div>
      
      <div className="flex flex-row justify-between items-center w-full ">
        <h1 className="mt-[70px] flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]  ss:leading-[100px] leading-[75px] text-gold-light">
          Your Beauty  <br className="sm:block 
          hidden " /> {" "}
          <span
           className="text-gradient text-gold-light ">is Our Duty <br className="sm:block 
           hidden " /> {" "}
           </span> {" "}
         
        </h1>
        
      </div>
<h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"></h1>
<p className={`${styles.paragraph } max-w-[470px] mt-5`}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis perspiciatis non
   doloremque esse velit eius facilis aut. Deserunt asperiores, repellat dolorum obcaecati ratione magni sint rerum saepe. In, veniam.
</p>
    </div>
<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
  <img src={hero} alt="" className="w-[100%] h-[90%] relative z-[5]" />
  <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient"/>
  <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient"/>
  <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient"/>
</div>


  </section>
);

export default Hero;
