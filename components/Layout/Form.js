import Header from './HeaderForm'
export default function Form({ children }) {
  return (
    <div>
      <Header />
      <div style={{
        minHeight: 'calc(100vh - 70px)',
        top: 70,
        position: 'relative',
        background: '#F1F5F9',
        padding: '28px 0'
      }}
      >
        {children}
      </div>
    </div>
  )
}