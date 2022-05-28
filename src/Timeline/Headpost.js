import React, { useState } from "react";
import Button from "../Navigation/Button";


function Headpost() {
  const [txValue ,setTxValue] = useState("What's happening now?");

 const handleClick = () => {
        alert('posted');
        setTxValue("");
      };

  const handleChange = (e) => {
        setTxValue(e.target.value);
  };     

  return (
    <div className="headpost">
      <div className="top">
        <h3>Home</h3>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2913/2913136.png"
          alt="stars"
        />
      </div>

      <div className="bottom">
      <div className="post">
        <img
          src="https://avatars.dicebear.com/api/open-peeps/stefan.svg"
          alt="userpix"
        />
      </div>
      <div className="others">
        <textarea
          id="comment"
          cols="30"
          rows="3"
          onChange={handleChange}
          value={txValue}
          placeholder="What's happening?"
        ></textarea>

        <div className="writeup">
          <img
            src="https://cdn-icons-png.flaticon.com/128/744/744480.png"
            alt="globe"
          />
          <span>
            <b>Everyone can reply</b>
          </span>
        </div>
        <div className="postbtns">
            <div className="pbtns">
                <span className="tooltip tooltip1">
          <img src="https://cdn-icons-png.flaticon.com/128/1160/1160157.png" alt="pix" />
          <span className="tp tp1">upload image</span>
          </span>

          <span className="tooltip tooltip2">
          <img src="https://cdn-icons-png.flaticon.com/128/1372/1372755.png" alt="GIF" />
          <span className="tp tp2">upload gif</span>
          </span>

          <span className="tooltip tooltip3">
          <img src="https://cdn-icons-png.flaticon.com/128/742/742751.png" alt="emoji" />
          <span className="tp tp3">upload emoji</span>
          </span>

          <span className="tooltip tooltip4">
          <img src="https://cdn-icons-png.flaticon.com/128/927/927693.png" alt="pin" />
          <span className="tp tp4">upload location</span>
          </span>

          </div>
          <Button 
          text="Tweet" 
          idn="tweetpostbtn"
          onClick={handleClick}
          />
         

        </div>
      </div>
      </div>
    </div>
  );
}

export default Headpost;
