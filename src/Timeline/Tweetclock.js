import React from 'react'

function Tweetclock() {
  return (
 
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
   );

}

//setInterval(Tweetclock, 1000);


export default Tweetclock
