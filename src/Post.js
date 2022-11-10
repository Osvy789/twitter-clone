import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div class="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div class="post__header">
          <div class="post__headerText">
            <h3>
              Osvy Guti{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @Osvy
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a twitter clone with react</p>
          </div>
        </div>
        <img src="" alt="" />
        <div class="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
