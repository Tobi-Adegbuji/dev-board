import React from "react";
import "./PostItem.css";

function PostItem({ Icon, title, color }) {
  return (
    <div className="postItem">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default PostItem;
