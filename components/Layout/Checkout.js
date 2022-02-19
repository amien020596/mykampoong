import Header from './HeaderCheckout'
import Footer from './FooterPublic'
export default function Public({ children }) {
  return (
    <>
      <Header />
      <div style={{minHeight: '50vh', marginTop: 77}}>
        {children}
      </div>
      <Footer />
    </>
  )
}