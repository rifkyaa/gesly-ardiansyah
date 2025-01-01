"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hilangkan scrollbar saat loading dimulai
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      // Tampilkan kembali scrollbar setelah loading selesai
      document.body.style.overflow = "";
    }

    // Bersihkan efek samping jika komponen tidak dirender lagi
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const imgChange = {
    hidden: { opacity: 0, scale: 1 },
    show: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.8,
        ease: "easeInOut",
      },
    }),
  };

  const containerUp = {
    hidden: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
      display: "none",
      transition: {
        delay: 3.5,
        duration: 0.5,
        ease: "easeInOut",
        onComplete: () => setIsLoading(false),
      },
    },
  };

  return (
    <motion.div
      id="loader"
      className="bg-primaryDark h-screen absolute inset-0 overflow-hidden z-50"
      variants={containerUp}
      initial="hidden"
      animate="show"
    >
      <motion.section className="flex flex-col justify-center items-center gap-3 w-full h-full -translate-y-32">
        <h1 className="text-primaryLight text-3xl md:text-5xl font-playfair uppercase">Gesly Ardiansyah</h1>
        <motion.div id="imageCon" className="w-[40vw] md:w-[20vh] h-max relative">
          <motion.img
            src="/images/imgProject1.webp"
            alt="imgLoader"
            className="object-cover w-full h-[30vh] absolute"
            variants={imgChange}
            initial="hidden"
            animate="show"
            custom={0}
          />
          <motion.img
            src="/images/imgProject5.webp"
            alt="imgLoader"
            className="object-cover w-full h-[30vh] absolute"
            variants={imgChange}
            initial="hidden"
            animate="show"
            custom={1}
          />
          <motion.img
            src="/images/imgPerformance2.webp"
            alt="imgLoader"
            className="object-cover w-full h-[30vh] absolute"
            variants={imgChange}
            initial="hidden"
            animate="show"
            custom={2}
          />
          <motion.img
            src="/images/imgProject2.webp"
            alt="imgLoader"
            className="object-cover w-full h-[30vh] absolute top-0 left-0"
            variants={imgChange}
            initial="hidden"
            animate="show"
            custom={3}
          />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Loader;
