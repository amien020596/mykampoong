import Document, { Head, Html, Main, NextScript } from "next/document";

import style from 'assets/vars'

const site_name = 'test'
const title = 'test'
const description = 'W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.'
const image = 'https://www.w3schools.com/images/w3schools_logo_436_2.png'
const imagetype = 'image/png'
const imagewidth = '436'
const imageheight = '228'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body id='mykampoong'>
          <style jsx global>{style}</style>
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-YPKCR6RHME"></script>
          <script dangerouslySetInnerHTML={
            {
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments)}
                  gtag("js", new Date());
                  gtag('config', 'G-YPKCR6RHME');
              `}
          }>
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;