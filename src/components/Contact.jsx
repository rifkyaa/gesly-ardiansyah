import { useState } from 'react'
import { FaInstagram, FaTiktok, FaWhatsapp, FaSpotify } from "react-icons/fa";
import Link from "next/link";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_bggrfui';
    const templateId = 'template_qo39gyf';
    const publicKey = 'K6qjDl2qA7S0qiAA5';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Gesly Ardiansyah',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('Terimakasih, Email Telah Terkirim. Kami Akan Respon Secepatnya!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        alert('Gagal Mengirim Email:', error);
      });

      setTimeout(() => { 
        e.target.reset();
       }, 2000)
  }

  
  return (
    <section id='contact' className='relative py-12 md:px-9 md:py-9 bg-primaryDark dark:bg-primaryLight flex flex-col justify-center items-center gap-6'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='font-playfair text-5xl uppercase text-center text-primaryLight dark:text-primaryDark'>Contact Us</h1>
        <p className='font-poppins text-center text-primaryLight dark:text-primaryDark'>For All things Gesly Ardiansyah</p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 w-full'>
        <input 
          type="text" 
          id="name" 
          className="w-[80%] md:w-[60%] lg:w-[75%] h-7 px-3 py-4 bg-transparent border-2 text-primaryLight border-primaryLight dark:text-primaryDark dark:border-primaryDark outline-none" 
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          id="email" 
          className="w-[80%] md:w-[60%] lg:w-[75%] h-7 px-3 py-4 bg-transparent border-2 text-primaryLight border-primaryLight dark:text-primaryDark dark:border-primaryDark outline-none" 
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          cols="30"
          rows="10" className='w-[80%] md:w-[60%] lg:w-[75%] h-[7rem] px-3 py-4 bg-transparent border-2 text-primaryLight border-primaryLight dark:text-primaryDark dark:border-primaryDark outline-none'
          placeholder='Write your Message'
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <button className='bg-primaryLight dark:bg-primaryDark dark:text-primaryLight px-8 py-2 rounded-2xl font-poppins uppercase'>
          Submit
        </button>
      </form>
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