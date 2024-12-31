import { useRef } from "react";
import heroImg from "@/../public/images/heroImg.png"
import Image from "next/image"
import { delay, motion, useScroll, useTransform } from "framer-motion";


const Hero = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0.5, 1], [0, -200]);
    const translateX = useTransform(scrollYProgress, [0.5, 1], [0, -500]);
    const translateX2 = useTransform(scrollYProgress, [0.5, 1], [0, 500]);

    const heroVariants = {
      hidden: { 
        opacity: 0, 
        y: -100,
        visibility: "hidden", },
      visible: {
        opacity: 1,
        y: 0,
        visibility: "visible",
        transition: { duration: 0.8, ease: "easeInOut",         delay: 0.6 },
      },
    };

  return (
    
    <motion.section 
      id="home" 
      className="h-screen flex items-center justify-center relative overflow-hidden bg-primaryLight dark:bg-primaryDark" 
      ref={container}
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >

      <motion.div style={{ x: translateX }} className='bg-bgColor1 absolute top-0 h-[50vh] lg:w-[90%] w-full'></motion.div>
      <motion.div style={{ x: translateX2 }} className='bg-bgColor2 absolute bottom-0 h-[50vh] lg:w-[90%] w-full'></motion.div>
      <div className='flex flex-col items-center z-10 w-full h-[75%] md:h-[62%] lg:h-[60%]'>
        <motion.p style={{ y: translateY}} className='uppercase md:text-lg font-poppins md:tracking-[0.5rem]'>Seniman - Model - Talent</motion.p>
        <div className='relative w-full leading-tight lg:leading-none flex flex-col justify-center items-center'>
          <motion.h1 style={{ x: translateX }} className="uppercase text-[3.5rem] md:text-[7rem] lg:text-[8rem] font-playfair text-center md:tracking-wider lg:tracking-widest">Gesly</motion.h1>
          <motion.h1 style={{ x: translateX2 }} className="uppercase text-[3.5rem] md:text-[7rem] lg:text-[8rem] font-playfair text-center md:tracking-wider lg:tracking-widest">Ardiansyah</motion.h1>
          <motion.div style={{ x: translateX2, }} className='absolute bottom-2 md:bottom-[1.3rem] lg:bottom-2 md:w-[90%] lg:w-[85%] h-[0.2rem] w-full rounded-full bg-primaryDark'></motion.div>
        </div>
      </div>
      <Image className="absolute bottom-0 w-[20rem] z-20" src={heroImg} alt="imgHero"></Image>
    </motion.section>
  )
}

export default Hero