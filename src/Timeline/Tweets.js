import React, { useState } from "react";
import Headpost from "./Headpost";
import Tweeet from "./Tweeet";
import Tweet from "./Tweet";
import Tweetclockclass from "./Tweetclockclass";
import Checkbox from "../Navigation/Checkbox";
import Checkboxclass from "../Navigation/Checkboxclass";
import Radiobtnclass from "../Navigation/Radiobtnclass";


function Tweets() {
  let noOfTweets = 1230;

  let [txValue , setTxValue] = useState("What's happening now?");
  const [check, setCheck] = useState(false)
 
   const handleChange = (e) => {
         setTxValue(e.target.value);
   };
 
   const handleToggle = () => {
     setCheck(!check);
     alert('Checkbox toggled');
   }

  return (
    <div className="tweets">
      <Headpost />

    {/* Show No of Tweets section */}
      <div className="tweetscreen">
        <p>Show {noOfTweets} tweets</p>
        <Tweetclockclass />
      <div className="checkboxes">
        <Checkbox 
          onChange={handleToggle}
          checked={check}
          />

          <Checkboxclass 
          // checkz={true}
          />

          <Radiobtnclass />
          <Radiobtnclass />
          <Radiobtnclass />

          </div>
      </div>


{/* Tweeets timeline display section */}
      <div className="tweetbox">
        <Tweet 
        userpix="https://randomuser.me/api/portraits/men/75.jpg"
        username="Prof Onyekchukwu"
        userhandle="@oprof2001"
        timeelapsed="2d"
        comment="The situastion is the damn counrty is getting out of hand."
        />    
        <Tweet 
        userpix="https://randomuser.me/api/portraits/women/75.jpg"
        username="Oluchi Ezeabachili"
        userhandle="@chibabyforlife"
        timeelapsed="2m"
        comment="Live a life of style and luxury with the Zenith Bank Gold and Platinum Premium Accounts. #MakeLifeHappen #ZenithMakeLifeHappen #ZenithBank."
        /> 
        <Tweet 
        userpix="https://randomuser.me/api/portraits/men/15.jpg"
        username="Mazino AllBerry"
        userhandle="@berry-bazooka"
        timeelapsed="4w"
        comment="Easy to use, stylish placeholders. Just add your desired image size (width & height) after our URL, and you'll get a random image."
        />   

        <Tweeet 
         userpix="https://randomuser.me/api/portraits/women/17.jpg"
         username="Belinda Chidozie"
         userhandle="@Belizzy"
         timeelapsed="6m"
         comment="Easy to use, stylish placeholders. Just add your desired image size (width & height) after our URL, and you'll get a random image."
       
        />

        {/* <div className="tweet">
          <img src="https://avatars.dicebear.com/api/bottts/stefan.svg" alt="" />
          <h5>Okechukwu Aghalanwaneya <span>@okeyjupez21  .7h</span> </h5>
          <p>Lorem ipsum dolor, sit amet cons. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="tweet">
          <img src="https://randomuser.me/api/portraits/women/74.jpg" alt="" />
          <h5>MandyKiss  <span>@iammandykiss  .3w</span></h5>
          <p>Lorem ipsum dolor, sit amet cons. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, voluptatibus!</p>
        </div> */}
        
      </div>
    </div>
  );
}

export default Tweets;
