import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import FAQ from './FAQ'
import { ChakraProvider } from '@chakra-ui/react';
import { system } from "@chakra-ui/react/preset";

function App() {
  return (
    <ChakraProvider value={system}> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
