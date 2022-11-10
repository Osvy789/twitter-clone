import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>        
            <div className='tweetBox__input'>
                <Avatar/>
                <input placeholder="What's Happening" type="text"/>
            </div>
                <input placeholder="Optional: Enter image URL" type="text" className='tweetBox__imageInput'/>
        <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox