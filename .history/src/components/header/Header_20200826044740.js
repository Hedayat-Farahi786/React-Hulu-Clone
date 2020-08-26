import React from "react";
import "./Header.css";
import {
  Home,
  FlashOn,
  LiveTv,
  VideoLibrary,
  Search,
  PersonOutline,
} from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerIcons">
        <Home />
        <FlashOn />
        <LiveTv />
        <VideoLibrary />
        <Search />
        <PersonOutline />
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png"
        alt=""
      />
    </div>
  );
};

export default Header;
