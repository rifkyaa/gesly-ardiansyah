import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/logoDark.png" />
      <title>Gesly Ardiansyah</title>
      <meta property="og:description" content="Gesly Ardiansyah saya seorang anak yang dibesarkan dilingkungan seni. Seni mengalir di darah saya sedari lahir karna Nenek saya adalah seorang pelakon seni di Jakarta. Saya juga seorang penyanyi, khususnya penyanyi lagu-lagu daerah (Sunda). Saya juga seorang freelance model/talent/muse untuk beberapa produk baju, film pendek, iklan, serta penyambutan tamu diberbagai acara dan lain-lain." />
      <meta name="keywords" content="Gesly Ardiansyah, Gesly, Ages, Model Bandung" />
      <meta name="robots" content="index, follow" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
