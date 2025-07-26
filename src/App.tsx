import './App.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="App">
      {/* Debug indicator - should show immediately if React loads */}
      <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        background: 'purple',
        color: 'white',
        padding: '10px',
        fontSize: '16px',
        zIndex: 999999,
        width: '100%',
        textAlign: 'center'
      }}>
        🟣 REACT IS WORKING - {new Date().toLocaleTimeString()}
      </div>
      
      <Header />
      <Hero />
      <About />
      <ProductShowcase />
      <Newsletter />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
