import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import FeaturedBox from "./components/FeaturedBox.jsx";
import About from "./components/About.jsx";
import CurrentStatus from "./components/CurrentStatus.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
    <div className="container">
      <Header />
      <main className="wrapper">
        <FeaturedBox />
        <About />
        <CurrentStatus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
