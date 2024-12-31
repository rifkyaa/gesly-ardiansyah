import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoMdArrowRoundForward } from "react-icons/io";

const Project = () => {
  const dataImgParallax = [
    {
      id: 1,
      label: "Fashion Show HUT Kota Bandung",
      src: "/images/imgProject1.webp",
      gridColStart: "1",
      gridRowStart: "1 / span 2",
    },
    {
      id: 2,
      label: "Bespoke Project",
      src: "/images/imgProject2.webp",
      gridColStart: "2",
      gridRowStart: "1", 
    },
    {
      id: 3,
      label: "Fashion Show Batik Talks at Mercure Bandung City Centre",
      src: "/images/imgProject3.webp",
      gridColStart: "2",
      gridRowStart: "2", 
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0.3, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 1.3]);

  return (
    <section
      id="project"
      className="relative overflow-hidden py-6 md:px-9 md:py-9"
      ref={container}
    >
      <h1 className="font-playfair text-5xl uppercase text-center dark:text-primaryLight">
        Project
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-2 py-9 md:h-[80vh] lg:h-[130vh]"
      >
        {dataImgParallax.map((project, index) => (
          <div
            key={project.id}
            className="relative overflow-hidden h-[50vh] md:h-full "
            style={{
              gridColumn: index === 0 ? project.gridColStart : undefined,
              gridRow: index === 0 ? project.gridRowStart : undefined,
            }}
          >
            <motion.div 
              className="relative w-full h-full"
              style={{ scale: scale }}
              >
              <Image
                src={project.src}
                alt={project.label}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            <motion.p
              style={{ translateY }}
              className={`absolute bottom-0 bg-[#2827278e] text-primaryLight text-lg text-left px-4 py-2 z-10`}
            >
              {project.label}
            </motion.p>
          </div>
        ))}
      </div>
      <Link href='/projects' className='w-36 flex justify-evenly items-center text-primaryDark dark:text-primaryLight border-2 border-primaryDark dark:border-primaryLight rounded-full p-2 font-poppins'>See More <IoMdArrowRoundForward/> </Link>
    </section>
  );
};

export default Project;
