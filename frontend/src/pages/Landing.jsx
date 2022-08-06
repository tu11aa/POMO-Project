import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Benefits from "../components/Sections/Benefits";
import Projects from "../components/Sections/Projects";
import About from "../components/Sections/About";
import Footer from "../components/Sections/Footer";
export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Benefits />
      <Projects />
      <About />
      <Footer />
    </>
  );
}


