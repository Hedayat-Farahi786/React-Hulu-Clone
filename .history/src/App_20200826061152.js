import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Results from "./components/results/Results";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="app">
      <Header />
      <Nav />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
