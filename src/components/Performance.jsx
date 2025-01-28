import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Performance = () => {
  const dataImagesPerformance = [
    { 
        id: 1, 
        label: 'Grand Final Mojang Jajaka KBB at Mason Pine Hotel Kota Baru Parahyangan', 
        src: "/images/imgPerformance1.webp",
        gridColStart: "1",
        gridRowStart: "1 / span 2",
      },
      { 
        id: 2, 
        label: 'Album Karinding Priangan', 
        src: "/images/imgPerformance2.webp",
        gridColStart: "2",
        gridRowStart: "1", 
      },
      { 
        id: 3, 
        label: 'Novana Hotel', 
        src: "/images/imgPerformance3.webp",
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
      className="relative overflow-hidden py-6 md:px-9 md:py-9 border-b-2 border-primaryDark dark:border-primaryLight "
      ref={container}
    >
      <h1 className="font-playfair text-5xl uppercase text-center dark:text-primaryLight">
        Performance
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-2 py-9 md:h-[80vh] lg:h-[130vh]"
      >
        {dataImagesPerformance.map((performance, index) => (
          <div
            key={performance.id}
            className="relative overflow-hidden h-[50vh] md:h-full"
            style={{
              gridColumn: index === 0 ? performance.gridColStart : undefined,
              gridRow: index === 0 ? performance.gridRowStart : undefined,
            }}
          >
            <motion.div 
              className="relative w-full h-full"
              style={{ scale: scale }}
              >
              <Image
                src={performance.src}
                alt={performance.label}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            <motion.p
              style={{ translateY }}
              className={`absolute bottom-0 bg-[#2827278e] text-primaryLight text-lg text-left px-4 py-2 z-10`}
            >
              {performance.label}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Performance