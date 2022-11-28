import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Blog from "./components/Blog";
import Feature from "./components/Feature";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />

      {/* features */}
      <Blog />

      {/* features */}
      <Feature />


      {/* services */}
      <Service />

      {/* abouts */}
      <About />

      {/* contacts // footer */}
      <Contact /> 




    </div>
  );
}

export default App;
