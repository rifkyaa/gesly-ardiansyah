import { useState, useEffect } from "react";


const Music = ({ isDarkMode }) => {
  const [spotifySrc, setSpotifySrc] = useState("");

  useEffect(() => {
    const baseSrc = "https://open.spotify.com/embed/artist/1eqiSYHlz6wLcAmitdlhru?utm_source=generator";
    const themeSrc = isDarkMode ? `${baseSrc}&theme=0` : baseSrc;
    setSpotifySrc(themeSrc);
  }, [isDarkMode]);

  return (
    <section id="music" className="px-9 py-9 bg-primaryDark dark:bg-primaryLight">
      <h1 className="text-3xl font-poppins uppercase w-full border-b-2 border-primaryLight text-primaryLight dark:text-primaryDark dark:border-primaryDark">
        Music
      </h1>
      <div className="py-5">
        <iframe
          style={{ borderRadius: '12px' }}
          src={spotifySrc}
          width="100%"
          height="430"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Music;
