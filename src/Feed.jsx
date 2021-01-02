import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import PostItem from "./PostItem";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import VideocamIcon from "@material-ui/icons/Videocam";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const submitPost = (e) => {
    e.preventDefault();
    setPosts;
  };

  return (
    <div className="feed">
      <div className="feed__postContainer">
        <div className="feed__post">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={submitPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__postItems">
          <PostItem Icon={BurstModeIcon} title="Photo" color="lightblue" />
          <PostItem Icon={VideocamIcon} title="Video" color="lightgreen" />
        </div>
      </div>
      {posts.map((post) => {
        <Post />;
      })}
      <Post
        name="Tobi Adegbuji"
        description="Java Developer"
        photoUrl=""
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex animi ipsa neque quibusdam sunt delectus aspernatur ullam obcaecati ut aliquam cupiditate dolor necessitatibus, quidem inventore? Sequi rerum odio inventore."
      />
    </div>
  );
}

export default Feed;
