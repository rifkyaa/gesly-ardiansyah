'use client'
import Image from 'next/image';
import LogoImg from '@/../public/images/logo.png';
import LogoImgDark from '@/../public/images/logoDark.png';
import { IoMdMoon } from 'react-icons/io';
import { BiSolidSun, BiWorld } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';
import { dataLinks } from './dataLinks';
import Link from 'next/link';
// import { useTranslation } from "react-i18next";


const Navbar = ({ isDarkMode, toggleTheme }) => {
  // const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isMobile, setIsMobile] = useState(false);

  // const { i18n } = useTranslation();
  // const [language, setLanguage] = useState("ID"); 

  // const toggleLanguage = () => {
  //   const newLanguage = language === "ID" ? "EN" : "ID";
  //   setLanguage(newLanguage);
  //   i18n.changeLanguage(newLanguage.toLowerCase()); 
  // };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%',transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]} },
    exit: { x: '100%', transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]} }
  };

  const linkVariants = {
    initial: { x: 80, opacity: 0 },
    enter: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i }
    }),
    exit: (i) => ({
      x: 80,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i }
    })
  }

  const navbarVariants = {
    hidden: { 
      opacity: 0, 
      y: -100,
      visibility: "hidden", },
    visible: {
      opacity: 1,
      y: 0,
      visibility: "visible",
      transition: { duration: 0.8, ease: "easeInOut",       delay: 0.2, },
    },
  };

  const handleClick = (e, id) => {
    e.preventDefault(); 
    const target = document.querySelector(id);
  
    if (target) {
      document.documentElement.style.scrollBehavior = "smooth";
  
      target.scrollIntoView({ behavior: "smooth", block: "start" });
  

      setTimeout(() => {
        document.documentElement.style.scrollBehavior = "auto";
      }, 1000); 
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.header 
      className="w-full fixed top-0 z-50 bg-primaryLight dark:bg-primaryDark dark:text-primaryLight"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      >
      <nav className="flex w-full justify-between items-center lg:max-w-7xl lg:mx-auto lg:py-1 px-4 py-1">
        <Link href="/" className="">
          {isDarkMode ? (
            <Image src={LogoImgDark} alt='logoImg' className="w-16 lg:w-20" />
          ) : (
            <Image src={LogoImg} alt='logoImg' className="w-16 lg:w-20" />
          )}
        </Link>

        <ul className="hidden lg:flex w-full justify-end items-center gap-9 pr-3 font-poppins border-r-[1px] border-primaryDark dark:border-primaryLight h-12">
          {dataLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => {
                setActiveLink(link.id);
                if (isMobile && toggleMenu) toggleMenu();
              }}
              className={`cursor-pointer ${
                activeLink === link.id ? 'relative flex justify-center items-center' : 'relative'
              }`}
            >
              <Link href={link.id} 
                className="block py-2 px-3"
                onClick={(e) => handleClick(e, link.id)}
              >
                {link.label}
              </Link>
              {activeLink === link.id && !isMobile && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute bottom-0 h-[2px] w-[80%] bg-primaryDark dark:bg-primaryLight rounded-full"
                  initial={{ left: 0 }}
                  animate={{ left: '11%' }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              )}
            </li>
          ))}
        </ul>

        <ul className="flex justify-center items-center pl-4 gap-5 rounded-lg">
          <div
            className={`w-12 h-6 bg-primaryDark dark:bg-primaryLight rounded-full p-1 flex cursor-pointer ${
              isDarkMode ? 'justify-end' : 'justify-start'
            }`}
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <motion.button
              key="sun"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="bg-primaryDark rounded-full"
              >
                <BiSolidSun />
              </motion.button>
            ) : (
              <motion.button
              key="moon"
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="bg-primaryLight rounded-full"
              >
                <IoMdMoon />
              </motion.button>
            )}
          </div>

          {/* <button
            onClick={toggleLanguage}
            className="flex justify-center items-center gap-[0.1rem] hover:opacity-80"
          >
            <BiWorld className="text-xl" />
            <span className="text-xl">{language}</span>
          </button> */}


          <div className="flex justify-center items-center lg:hidden">
            <button onClick={toggleMenu} className="z-20 dark:text-primaryLight">
              {isOpen ? <CgClose className="text-4xl mr-4" /> : <FiMenu className="text-4xl" />}
            </button>
          </div>
        </ul>
      </nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-screen dark:bg-primaryDark bg-primaryLight flex flex-col justify-center md:gap-28 gap-16 items-center text-primaryDark dark:text-primaryLight"
          >
            <div className='relative w-full flex justify-center items-center'>
              <h1 className='uppercase font-poppins font-medium'>Navigation</h1>
              <div className='h-[0.2rem] bg-primaryDark w-[90%] dark:bg-primaryLight absolute -bottom-1'></div>
            </div>
            <div className='flex flex-col gap-9'>
              {dataLinks.map((link, index) => (
                <motion.li
                custom={index}
                variants={linkVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                key={link.id}
                onClick={() => {
                  setActiveLink(link.id);
                  toggleMenu();
                }}
                  className={`cursor-pointer relative flex justify-center items-center `}
                >
                  <a href={link.id} 
                    className="text-5xl font-poppins font-semibold uppercase"
                    onClick={(e) => handleClick(e, link.id)} // Tambahkan event onClick
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </div>
            <motion.div 
            className='flex justify-between w-full px-7'
            initial={{ opacity: 0, x: 100}}
            animate={{ opacity: 1, x: 0}}
            exit={{opacity:0, x: 100}}
            transition= {{ duration: 0.7, ease: [0.76, 0, 0.24, 1]}}
            >
              <div className='flex flex-col'>
                <Link href='https://www.instagram.com/geslyardiansyah/' target='_blank'>Instagram</Link>
                <Link href="https://www.tiktok.com/@geslyardiansyah" target='_blank'>Tiktok</Link>
              </div>
              <div className='flex flex-col items-end'>
                <Link href="https://open.spotify.com/artist/1eqiSYHlz6wLcAmitdlhru?si=A64tNa54ShG9yzzDq1EvXw" target='_blank'>Spotify</Link>
                <Link href="https://api.whatsapp.com/send?phone=628986668595&text=Halo Kak, Saya Berminat Berkolaborasi, Bisa dibantu Lebih Lanjut?" target='_blank'>WhatsApp</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
