import { useEffect, useState } from "react";
import Link from "next/link"
import { FaInstagram, FaTiktok, FaWhatsapp, FaSpotify } from "react-icons/fa";


const StickySosmed = () => {
    const [iconColor, setIconColor] = useState("black");

    useEffect(() => {
      const handleScroll = () => {
        const musicSection = document.querySelector("#music").getBoundingClientRect();
        const contactSection = document.querySelector("#contact").getBoundingClientRect();
  
        if (musicSection.top <= 10 && musicSection.bottom > 10) {
          setIconColor("white");
        } else if (contactSection.top <= 10 && contactSection.bottom > 10) {
          setIconColor("white");
        } else {
          setIconColor("black");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <section className="hidden lg:flex relative z-50">
        <div className='fixed top-[40vh] right-1 flex flex-col justify-center items-center gap-11 md:gap-6 mb-14'>
            <Link href='https://www.instagram.com/geslyardiansyah/' target="_blank">
            <FaInstagram className={`text-3xl rounded-full p-1 text-${iconColor}`}/>
            </Link>
            <Link href="https://www.tiktok.com/@geslyardiansyah" target="_blank">
            <FaTiktok className={`text-3xl rounded-full p-1 text-${iconColor}`}/>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=628986668595&text=Halo Kak, Saya Berminat Berkolaborasi, Bisa dibantu Lebih Lanjut?" target="_blank">
            <FaWhatsapp className={`text-3xl rounded-full p-1 text-${iconColor}`}/>
            </Link>
            <Link href="https://open.spotify.com/artist/1eqiSYHlz6wLcAmitdlhru?si=A64tNa54ShG9yzzDq1EvXw" target="_blank">
            <FaSpotify className={`text-3xl rounded-full p-1 text-${iconColor}`}/>
            </Link>
        </div>
    </section>
  )
}

export default StickySosmed