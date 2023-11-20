import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Calculator />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
