import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/main";
import FirstSection from "./components/header/main";
import SecondSection from "./components/aboutMe/main";
import ThirdSection from "./components/skills/main";
import FourthSection from "./components/skillsInDevelopment/main";
import ContactUs from "./components/contactUs/main";

function App() {
  return (
    <div className="appContainer">
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <ContactUs />
    </div>
  );
}

export default App;
