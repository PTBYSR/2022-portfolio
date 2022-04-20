import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Work from './Components/Work/Work'
import About from './Components/About/About'
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
      {/* FOOTER */}
    </div>
  );
}

export default App;
