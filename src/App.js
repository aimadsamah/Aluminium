import { useEffect } from 'react';
import Footer from "./components/footer/Footer";
import Prods from "./components/prods/Prods";
import Topbar from "./components/topbar/Topbar";
import Apropos from "./pages/apropos/Apropos";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Produits from "./pages/produits/Produits";
import Services from "./pages/services/Services";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Topbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/produits" element={<Produits />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
    
   

    
  );
}

export default App;
