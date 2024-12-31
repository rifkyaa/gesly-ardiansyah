import { FaInstagram, FaTiktok, FaWhatsapp, FaSpotify } from "react-icons/fa";
import Link from "next/link";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section id='contact' className='relative py-12 md:px-9 md:py-9 bg-primaryDark dark:bg-primaryLight flex flex-col justify-center items-center gap-6'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='font-playfair text-5xl uppercase text-center text-primaryLight dark:text-primaryDark'>Contact Us</h1>
        <p className='font-poppins text-center text-primaryLight dark:text-primaryDark'>For All things Gesly Ardiansyah</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-5 w-full'>
        <input 
          type="email" 
          name="name" 
          id="email" 
          className="w-[80%] md:w-[60%] lg:w-[75%] h-7 px-3 py-4 bg-transparent border-2 text-primaryLight border-primaryLight dark:text-primaryDark dark:border-primaryDark" 
          placeholder="Email Address"
        />
        <input 
            type="text" 
            className="w-[80%] md:w-[60%] lg:w-[75%] h-7 px-3 py-4 bg-transparent border-2 text-primaryLight border-primaryLight dark:text-primaryDark dark:border-primaryDark" 
            placeholder="Message"
        />
        <button className='bg-primaryLight dark:bg-primaryDark dark:text-primaryLight px-8 py-2 rounded-2xl font-poppins uppercase'>
          Submit
        </button>
      </div>
      <div className='flex justify-center items-center gap-11 md:gap-6 mb-14'>
        <Link href='https://www.instagram.com/geslyardiansyah/' target="_blank">
          <FaInstagram className="border border-primaryLight dark:border-primaryDark text-primaryLight dark:text-primaryDark text-3xl rounded-full p-1"/>
        </Link>
        <Link href="https://www.tiktok.com/@geslyardiansyah" target="_blank">
          <FaTiktok className="border border-primaryLight dark:border-primaryDark text-primaryLight dark:text-primaryDark text-3xl rounded-full p-1"/>
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=628986668595&text=Halo Kak, Saya Berminat Berkolaborasi, Bisa dibantu Lebih Lanjut?" target="_blank">
          <FaWhatsapp className="border border-primaryLight dark:border-primaryDark text-primaryLight dark:text-primaryDark text-3xl rounded-full p-1"/>
        </Link>
        <Link href="https://open.spotify.com/artist/1eqiSYHlz6wLcAmitdlhru?si=A64tNa54ShG9yzzDq1EvXw" target="_blank">
          <FaSpotify className="border border-primaryLight dark:border-primaryDark text-primaryLight dark:text-primaryDark text-3xl rounded-full p-1"/>
        </Link>
      </div>

      <Footer />
    </section>
  )
}

export default Contact