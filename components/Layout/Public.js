import Header from './HeaderPublic'
import Footer from './FooterPublic'
import ContextMyTrip from 'libs/hooks/mytrip'
import AccountContext from 'libs/hooks/account'
export default function Public({ children }) {
  return (
    <>
      <AccountContext.Provider>
        <ContextMyTrip.Provider>
          <Header />
          <div style={{ minHeight: '50vh', marginTop: 65 }}>
            {children}
          </div>
          <Footer />
        </ContextMyTrip.Provider>
      </AccountContext.Provider>
    </>
  )
}