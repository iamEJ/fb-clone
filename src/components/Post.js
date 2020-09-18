import React from "react";
import "./css/Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_top_info">
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} />
      </div>
      <div className="post_options">
        <div className="post_option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;