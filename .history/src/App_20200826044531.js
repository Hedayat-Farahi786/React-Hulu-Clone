import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import {Home,FlashOn, LiveTv, VideoLibrary, Search, PersonOutline} from "@material-ui/icons"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="headerIcons">
        <Home/>
        <FlashOn/>
        <LiveTv/>
        <VideoLibrary/>
        <Search/>
        <PersonOutline/>  
      </div>
      <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png" alt=""/>
    </div>
  );
}

export default App;
