import Button from "./Button";
import Profilearea from "./Profilearea";
import Navigation from "./Navigation";

function Header() {
    const showAlert = () => {
      alert('clciked');
    }
    return (
        <div className="header">
            <Navigation />
            <Button text="Tweet"
            idn="tweetbtn"
            onclick={showAlert}
            />
            <Profilearea />

        </div>

    )
}

export default Header;