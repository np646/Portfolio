"use client";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}
