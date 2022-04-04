import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <h1> portfolio </h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => null}
        >
        press me
      </motion.button>
    </div>
  );
}

export default App;
