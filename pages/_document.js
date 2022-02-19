
import Document, { Html, Head, Main, NextScript } from "next/document";
import style from 'assets/vars'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
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