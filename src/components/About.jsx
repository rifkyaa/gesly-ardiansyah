import Paragraph from "./Paragraph"

const paragraph = "Hello Saya Gesly Ardiansyah saya seorang anak yang dibesarkan dilingkungan seni. Seni mengalir di darah saya sedari lahir karna Nenek saya adalah seorang pelakon seni di Jakarta. Saya juga seorang penyanyi, khususnya penyanyi lagu-lagu daerah (Sunda).Saya juga seorang freelance model/talent/muse untuk beberapa produk baju, film pendek, iklan, serta penyambutan tamu diberbagai acara dan lain-lain."

const About = () => {
  return (
    <section id='about' className='flex flex-col gap-6 items-center bg-primaryLight dark:bg-primaryDark transition-colors dark:text-primaryLight my-10 py-20 px-7 lg:px-16 border-b-2 border-t-2 border-primaryDark dark:border-primaryLight'>
      <h1 className='uppercase text-5xl md:text-6xl lg:text-7xl font-playfair'>
        About Me
      </h1>
      <Paragraph paragraph={paragraph}/>
    </section>
  )
}

export default About