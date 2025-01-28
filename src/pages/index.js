import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Hero from "@/components/Hero"
import Music from "@/components/Music"
import LatestUpdateInsragram from "@/components/LatestUpdateInsragram"
import Project from "@/components/Project"
import Performance from "@/components/Performance"
import Contact from "@/components/Contact"
import Lenis from "lenis"
import { useEffect, useState } from "react"
import Loader from "@/components/Loader"
import InfinitySlider from "@/components/InfinitySlider"
import StickySosmed from "@/components/StickySosmed"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };
  

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  }, [])
  
      
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mengatur loading selesai setelah 4 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative bg-primaryLight dark:bg-primaryDark">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main className="max-w-7xl mx-auto relative">
            <Hero />
            {/* <StickySosmed /> */}
            <About />
            <Music isDarkMode={isDarkMode} />
            <LatestUpdateInsragram />
            <Project />
            <Performance />
            <InfinitySlider />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}
