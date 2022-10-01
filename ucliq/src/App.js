import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
//import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Career from "./components/Career";
import BuySell from "./components/BuySell";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/buy-sell" element={<BuySell/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
