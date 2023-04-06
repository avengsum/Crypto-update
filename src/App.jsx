import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Crypto from './components/Crypto'
import Market from './components/Market'
import Earn from './components/Earn'
import Contact from './components/Contact'
import { BrowserRouter } from "react-router-dom";
function App() {
  
  return (
    <div className="bg-black">
  <BrowserRouter>
  <Navbar />
  
     <Hero />
     <Crypto />
     <Market />
     <Earn />
     <Contact />
  </BrowserRouter>
      
    </div>
  )
}

export default App
