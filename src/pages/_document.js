import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/logoDark.png" />
      <title>Gesly Ardiansyah</title>
      <meta name="description" content="Website resmi Gesly Ardiansyah, musisi di Jawabarat, Indonesia. Lihat video TikTok, Spotify, dan karya terbaiknya di sini." />
      <meta name="keywords" content="Gesly Ardiansyah, musisi, Ages, Gesly, Model, Spotify Indonesia" />
      <meta name="author" content="Gesly Ardiansyah" />
      <meta property="og:title" content="Gesly Ardiansyah - Official Site" />
      <meta property="og:description" content="Official portfolio and media site of Gesly Ardiansyah" />
      <meta property="og:image" content="/public/images/heroImg.png" />
      <meta property="og:url" content="https://www.geslyardiansyah.site/" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.geslyardiansyah.site/" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
