
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/why-choose-us"
          element={<WhyChooseUs />}
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;
