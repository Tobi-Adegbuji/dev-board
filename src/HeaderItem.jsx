import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import "./HeaderItem.css";

function HeaderItem({ avatar, Icon, title }) {
  return (
    <div className="headerItem">
      {/* If icon is passed then render Icon element */}
      {Icon && <Icon className="headerItem__icon" />}
      {avatar && <Avatar className="headerItem_icon" src={avatar} />}
      <Typography className="headerItem__title">{title}</Typography>
    </div>
  );
}

export default HeaderItem;
