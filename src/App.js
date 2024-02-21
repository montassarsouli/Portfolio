import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
