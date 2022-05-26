import React from "react";
import Headpost from "./Headpost";

function Tweets() {
  let noOfTweets = 1230;

  return (
    <div className="tweets">
      <Headpost />

      <div className="tweetscreen">
        <p>Show {noOfTweets} tweets</p>
      </div>

      <div className="tweetbox">
        
        <div className="tweet">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
          <h5>Firstname Username <span>@firstname2001  .2d</span> </h5>
          <p>Lorem ipsum dolor, sit amet cons. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, voluptatibus!</p>
        </div>
        <div className="tweet">
          <img src="https://avatars.dicebear.com/api/bottts/stefan.svg" alt="" />
          <h5>Okechukwu Aghalanwaneya <span>@okeyjupez21  .7h</span> </h5>
          <p>Lorem ipsum dolor, sit amet cons. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="tweet">
          <img src="https://randomuser.me/api/portraits/women/74.jpg" alt="" />
          <h5>MandyKiss  <span>@iammandykiss  .3w</span></h5>
          <p>Lorem ipsum dolor, sit amet cons. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, voluptatibus!</p>
        </div>
        
      </div>
    </div>
  );
}

export default Tweets;
