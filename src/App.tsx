import './App.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ProductShowcase />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
