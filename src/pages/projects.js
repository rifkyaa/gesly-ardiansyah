import NavProject from "@/components/NavProject";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Contact from "@/components/Contact";

const projects = () => {
  const dataImageAllProject = [
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
    {
      id: 4,
      label: "Kick Fest 2024",
      src: "/images/imgProject4.webp",
      gridColStart: "1 / span 2",
      gridRowStart: "3 / span 2",
    },
    {
      id: 5,
      label: "Budaksunda.merch",
      src: "/images/imgProject5.webp",
      gridColStart: "1",
      gridRowStart: "5 / span 2",
    },
    {
      id: 6,
      label: "Persipa Pati",
      src: "/images/imgProject6.webp",
      gridColStart: "2",
      gridRowStart: "5 / span 2",
    },
    {
      id: 7,
      label: "Greenlight x 3Second",
      src: "/images/imgProject7.jpg",
      gridColStart: "1 / span 2",
      gridRowStart: "7 / span 2",
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0.3, 1], [0, -200]);

  return (
    <section className="bg-primaryLight dark:bg-primaryDark max-w-7xl mx-auto">
      <div className="py-6 px-3 md:px-9 md:py-9">
        <NavProject />
        <h1 className="font-playfair text-5xl uppercase text-center dark:text-primaryLight mb-5">
          Project
        </h1>
        <p className="font-poppins text-justify text-primaryDark dark:text-primaryLight">
          Dokumentasi hasil kolaborasi dengan berbagai brand, menonjolkan
          kreativitas dan profesionalisme. Setiap projek dirancang untuk
          mencerminkan nilai brand dan menciptakan dampak positif yang berkesan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 py-9 h-[300vh] md:h-[300vh] lg:h-[550vh]">
          {dataImageAllProject.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden
                ${project.gridColStart === "1" ? "md:col-start-1" : ""}
                ${project.gridColStart === "2" ? "md:col-start-2" : ""}
                ${project.gridRowStart === "1 / span 2" ? "md:row-span-2" : ""}
                ${project.gridRowStart === "1" ? "md:row-start-1" : ""}
                ${project.gridRowStart === "5 / span 2" ? "md:row-span-2" : ""}
                ${project.gridColStart === "1 / span 2" ? "md:col-span-2" : ""}
              `}

            >
              <motion.div className="relative w-full h-full">
                <Image
                  src={project.src}
                  alt={project.label}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>

              <motion.p
                style={{ translateY }}
                className="absolute bottom-0 bg-[#2827278e] text-primaryLight text-lg text-left px-4 py-2 z-10"
              >
                {project.label}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default projects;
