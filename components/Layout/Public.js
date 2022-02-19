import ContextMyTrip from 'libs/hooks/mytrip'
import Footer from './FooterPublic'
import Header from './HeaderPublic'

export default function Public({ children, ...props }) {
  return (
    <>
      <ContextMyTrip.Provider>
        <Header />
        <div style={{ minHeight: '50vh', marginTop: 65, ...props.style }}>
          {children}
        </div>
        <Footer />
      </ContextMyTrip.Provider>
    </>
  )
}