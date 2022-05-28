import Logo from "./Logo";

let Navigation = () => {
  return (
    <div className="navigation">
      <nav>

        <ul>
          <li className="logoli">
          <Logo />
          </li>
          <li>
            <a href="https://firstrapp-twitter-clone.netlify.app">
              <img src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="https://firstrapp-twitter-clone.netlify.app">
              <img src="https://cdn-icons-png.flaticon.com/128/74/74559.png" alt="" />
              <span> Explore</span>
            </a>
          </li>
          <li>
            <a href="https://firstrapp-twitter-clone.netlify.app">
              <img src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png" alt="" />
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="https://firstrapp-twitter-clone.netlify.app">
              <img src="https://cdn-icons-png.flaticon.com/128/561/561127.png" alt="" />
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="https://firstrapp-twitter-clone.netlify.app">
              <img src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" />
              <span>Profile</span>
            </a>
          </li> <li>
            <a href="https://firstrapp-twitter-clone.netlify.app">
              <img src="https://cdn-icons-png.flaticon.com/128/570/570223.png" alt="" />
              <span>Mores</span>
            </a>
          </li> 
         
        </ul>
      </nav>

    </div>
  );
};

export default Navigation;
