import Head from "next/head"

export default function Seo () {
  const path = 'https://radioibai.world'
  const pageTitle = 'Radio Ibai Worlds 2020 - Todo el Mundial de League of Legends'
  const pageDescription = "Radio Ibai Worlds 2020, todo el mundial de League of Legends 'LOL' 2020 comentado por Ibai, Ander, BarbeQ, Future, Reven, Werlyb, ElMillor, Miniduke, Kuentin y muchos más"

  const metaUrl = `${path}`
  const metaTitle = pageTitle
  const metaDescription = pageDescription
  const imageSeo = `${path}/img/seo.jpg`
  const logoSeo = {
    src: `${path}/img/logo.png`,
    width: 180,
    height: 60,
  }

  const keywords = "Ibai, Ander, LOL 2020, League of Legends, Worlds, BarbeQ, Kuentin, ElMillor, Future, G2, Miniduke, Reven, Werlyb"

  const jsonLd = `
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "${pageTitle}",
      "url": "${metaUrl}",
      "description": "${metaDescription}",
      "image": {
        "@type": "ImageObject",
        "url": "${path}/img/logoSeo.jpg",
        "height": 200,
        "width": 200
      },
      "dateModified": "${new Date().toISOString()}",
      "logo": {
        "@type": "ImageObject",
        "url": "${logoSeo.src}",
        "width": ${logoSeo.width},
        "height": ${logoSeo.height}
      }
    }`

  const finalJsonLD = jsonLd ? JSON.stringify(JSON.parse(jsonLd)) : ""

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        {isHome ? metaTitle : `${metaTitle} | ${process.env.title}`}
      </title>
      <link rel="canonical" href={metaUrl} />
      <meta name="description" content={metaDescription} />
      <meta
        name="robots"
        content="index,follow"
      />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content={process.env.title} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={"website"} />
      <meta property="og:image" content={imageSeo} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={process.env.twitterCreator} />
      <meta name="twitter:creator" content={process.env.twitterCreator} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageSeo} />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#2d3748" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#2d3748" />

      {jsonLd && (
        <script type="application/ld+json">{finalJsonLD && finalJsonLD}</script>
      )}
    </Head>
  )
}
