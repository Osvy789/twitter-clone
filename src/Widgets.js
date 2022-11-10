import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchSharpIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1590384919829962752"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="JeffBezos"
          options={{ height: 400 }}
        />

      </div>
    </div>
  );
}

export default Widgets;
