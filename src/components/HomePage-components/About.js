import React from 'react';
import rope from '../../assets/images/rope.jpg'
const AboutSection = () => {

  return (

  
  
<div class="container xl:my-11 mx-auto md:px-6   " >

  <section class="mb-10   bg-[#00000000]">
   
    <div class="container mx-auto text-center lg:text-left xl:px-36 text-xl     "> 
      <div class=" grid items-center lg:grid-cols-2  ">
        <div class="mb-12 lg:mb-0 ">
          <div
            class="xl:h-[450px] h-[650px] relative z-[1] block rounded-2xl bg-[#ffffff38] px-6 xl:pt-12 pt-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
            <h2 class="mb-8 xl:text-3xl text-2xl font-bold">Enjoy the workout !</h2>
            <p class="mb-8 pb-2  text-neutral-900  dark:text-neutral-300 lg:pb-0">
              We provide the best fitness exercises for your gym experience
            </p>

            <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Diverse exercises
              </p>
              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                 High quality 
              </p>
              <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Fun experience
              </p>
            </div>

            <p class="mb-0 text-neutral-900 text-opacity-70 font-bold dark:text-neutral-300">
            We want  to make your  journey to healthy and beautiful aging as pleasant as possible!
keep fit by finding your favorite exercises and workout plans right here:        
            </p>
          </div>
        </div>
        <div>
          <img src={rope}
            class="xl:w-full xl:h-[32rem] h-0 w-0 object-cover  rounded-2xl shadow-lg dark:shadow-black/20"  alt='rope' />
        </div>
      </div>
    </div>
 
  </section>
  
</div>


   
  );
};

export default AboutSection;
