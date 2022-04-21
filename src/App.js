import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Work from './Components/Work/Work'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import './App.css';
import { motion } from "framer-motion";


function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Hero />
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => null}
        >
        press me
        no risk no magic
      </motion.button>
      <Work />
      <About />
      {/* <ContactMe /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
