import React from "react";
import "./css/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/f/f2/Eastern_Barn_Owl_%28Tyto_javanica_stertens%29%2C_Raigad%2C_Maharashtra.jpg"
        image=""
        username="Fallen Owl"
        timestamp="2020-09-18"
        message="LMAO"
      />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/f/f2/Eastern_Barn_Owl_%28Tyto_javanica_stertens%29%2C_Raigad%2C_Maharashtra.jpg"
        image="https://images.ctfassets.net/hrltx12pl8hq/VZW7M82mrxByGHjvze4wu/216d9ff35b6980d850d108a50ae387bf/Carousel_01_FreeTrial.jpg?fit=fill&w=800&h=450"
        username="Fallen Owl"
        timestamp="2020-09-18"
        message="Very impresive"
      />
    </div>
  );
}

export default Feed;
