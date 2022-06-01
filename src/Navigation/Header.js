import Button from "./Button";
import Profilearea from "./Profilearea";
import Navigation from "./Navigation";

function Header() {
    const show = () => {
      alert('Functionn component button Header clicked');
    }
    return (
        <div className="header">
            <Navigation />
            <Button 
            buttontext="Tweet"
            buttonid="tweetbtn"
            buttonClick={show}
            />
            <Profilearea />

        </div>

    )
}

export default Header;