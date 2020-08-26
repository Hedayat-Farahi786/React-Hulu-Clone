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
        <div className="headerIcon">
          <Home />
          <p>Home</p>
        </div>
        <div className="headerIcon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="headerIcon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="headerIcon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="headerIcon">
          <Search />
          <p>Searc</p>
        </div>
        <div className="headerIcon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png"
        alt=""
      />
    </div>
  );
};

export default Header;
