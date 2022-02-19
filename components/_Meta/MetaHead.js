import Head from 'next/head'
export default function MetaHead({
  site_name = '',
  title = '',
  description = '',
  image = '',
  imagetype = '',
  imagewidth = '',
  imageheight = ''
}) {

  let currentURL = ''
  if (typeof window !== 'undefined') {
    currentURL = window.location.href
  }

  return (
    <Head>
      <meta property="og:url" content={currentURL} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={image} />
      <meta property="og:image:type" content={imagetype} />
      <meta property="og:image:width" content={imagewidth} />
      <meta property="og:image:height" content={imageheight} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={site_name} />
      <meta name="twitter:creator" content={site_name} />

      <meta property="twitter:site:id" content="1373245128081477639" /> // amien kurniawan
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={title} />
      <meta property="twitter:image:src" content={image} />
      <meta property="twitter:image:width" content={imagewidth} />
      <meta property="twitter:image:height" content={imageheight} />

      <link itemProp="thumbnailUrl" href={image} />
      <span itemProp="thumbnail" itemScope={true} itemType={image}>
        <link itemProp="url" href={image} />
      </span>
    </Head>
  )
}
