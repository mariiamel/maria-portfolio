import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
    </>
  )
}



