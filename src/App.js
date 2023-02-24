import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from "./components/work/Work";
import { useEffect } from "react";
import Contact from "./components/contact/Contact";
function App() {
  useEffect(() => {
    console.log(window.TagCanvas);
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
