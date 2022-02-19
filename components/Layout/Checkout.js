import Footer from './FooterPublic'
import Header from './HeaderCheckout'

export default function Public({ children }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: '50vh', marginTop: 77 }}>
        {children}
      </div>
      <Footer />
    </>
  )
}