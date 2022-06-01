import React from 'react';


function Tweet({username, userpix, userhandle, timeelapsed, comment}) {
    // const username = props.username;
    // const userhandle = props.userhandle;
    // const userpix = props.userpix;
    // const comment = props.comment;
    // const timeelapsed = props.timeelapsed;


    //Modifying props test to see if React will alllw it.
    //username = username + "22";


  return (
    <div className="tweet">
    <img src={userpix} alt="" />
    <h5>{username} <span>{userhandle}</span><span><b>{timeelapsed}</b></span> </h5>
    <p>{comment}</p>
  </div>
  )
}

export default Tweet;
