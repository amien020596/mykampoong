import Head from 'next/head'

export default function MetaHead(props) {

  const description = props?.description || "";
  const title = props?.title || "";
  const currentURL = props?.url || "";
  const image = props?.featured_image || '/images/rectangle_43.png';
  const name = props?.name || "";
  const featured_image = props?.featured_image || "";
  const imagetype = props?.imageType || "";

  const site_name = 'test'
  const imagewidth = props?.width || 0;
  const imageheight = props?.height || 0;


  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      // twitter
      <meta name="twitter:image" content={featured_image} />
      <meta name="twitter:creator" content={site_name} />
      <meta property="twitter:site:id" content="1373245128081477639" /> // amien kurniawan
      <meta property="twitter:site" content={site_name} />
      {/* <meta property="twitter:site:id" content="13334762" /> */}
      {/* <meta property="twitter:creator:id" content="13334762" /> */}
      <meta property="twitter:creator" content="www.mykampoong.com" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content='https://dummyimage.com/600x600/000/fff.png' />
      <meta property="twitter:image:alt" content={name} />
      <meta property="twitter:image:width" content={600} />
      <meta property="twitter:image:height" content={600} />

      // twitter open graph
      <meta property="og:url" content={currentURL} />
      <meta property="og:image" itemProp="image" content={"https://app.mykampoong.com/storage/taro/akomodasi/tegal-dukuh-camp/Taro_Rice_Field_Cottage_1.jpg"} />
      <meta property="og:image" content={"https://app.mykampoong.com/storage/taro/akomodasi/tegal-dukuh-camp/Taro_Rice_Field_Cottage_1.jpg"} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:image:type" content={imagetype} />
      <meta property="og:image:alt" content={'my_kampoong'} />
      <meta property="og:image:width" content={imagewidth} />
      <meta property="og:image:height" content={imageheight} />


    // facebook
      <meta property="fb:app_id" content={553158979390341} />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#fff" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>

      <meta property="og:type" content="website" />

      {/* 
      <link itemProp="thumbnailUrl" href={image} />
      <span itemProp="thumbnail" itemScope={true} itemType={image}>
        <link itemProp="url" href={image} />
      </span> */}
    </Head>
  )
}
