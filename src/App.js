import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
      </div>
    </>
  );
}

export default App;
