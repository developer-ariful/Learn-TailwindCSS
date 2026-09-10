import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <main>
      <Hero/>
      <Categories/>
      <Products/>
      <CTA/>
     </main>
     <Footer/>
    </>
  )
}

export default App
