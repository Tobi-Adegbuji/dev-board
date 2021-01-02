import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import PostItem from "./PostItem";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import SendIcon from "@material-ui/icons/Send";
function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__headerInfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <hr />
      <div className="post__buttons">
        <PostItem title="Like" Icon={FavoriteIcon} color="red" />
        <PostItem title="Comment" Icon={CommentIcon} color="lightgreen" />
        <PostItem title="Send" Icon={SendIcon} color="lightblue" />
      </div>
    </div>
  );
}

export default Post;
