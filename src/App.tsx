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
