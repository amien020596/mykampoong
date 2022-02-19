import Header from './HeaderProtected'
import Sidemenu from './SidemenuProtected'

export default function Protected({ children }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: '50vh', top: 70, position: 'relative', background: '#F1F5F9' }}>
        <div className='f'>
          <Sidemenu />
          <div style={{ width: '73.5%', paddingTop: 28, marginLeft: 44 }}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}