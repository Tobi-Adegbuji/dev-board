import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderItem from "./HeaderItem";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://raw.githubusercontent.com/Tobi-Adegbuji/dev-board/main/07cd298a-2b1b-484b-9284-bb64b6117471_200x200.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input />
        </div>
      </div>

      <div className="header__right">
        <HeaderItem Icon={HomeIcon} title="Home" />
        <HeaderItem Icon={PeopleIcon} title="Positions" />
        <HeaderItem Icon={RssFeedIcon} title="Network" />
        <HeaderItem Icon={MessageIcon} title="Messages" />
        <HeaderItem Icon={NotificationsNoneIcon} title="Notifications" />
        <HeaderItem avatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.searchpng.com%2F2019%2F02%2F11%2Fdeafult-profile-icon-transparent-png-free-download%2F&psig=AOvVaw1SriOUgN3xOiv9NxoSB668&ust=1609445241643000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg4PHA9u0CFQAAAAAdAAAAABAD" />
      </div>
    </div>
  );
}

export default Header;
