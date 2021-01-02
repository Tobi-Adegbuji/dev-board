import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import PostItem from "./PostItem";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import VideocamIcon from "@material-ui/icons/Videocam";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { ListItemAvatar } from "@material-ui/core";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [userInput, setUserInput] = useState("");

  /*Use Effect hook used to fire off code when the feed component loads
  It can also be used to fire off code when the component rerenders if we dont pass a second argument*/
  useEffect(() => {
    //Getting current real-time snapshot of posts collection
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const submitPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Tobi Adegbuji",
      description: "Java Developer",
      message: userInput,
      photoUrl: "",
      //Using the server timestamp allows the time to be correct regardless of timezone
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed__postContainer">
        <div className="feed__post">
          <CreateIcon />
          <form>
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              type="text"
            />
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          // If there are 1000 elements in a list, react will only rerender 1
          // if a new one is added instead of all of them. This is why the key is important
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
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
