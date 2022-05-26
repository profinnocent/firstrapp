import "./App.css";
import Header from "./Navigation/Header";
import Tweets from "./Timeline/Tweets";
import Trends from "./Trends/Trends";

function App() {
  return (
    <div className="App">
      <Header />
      <Tweets />
      <Trends />
    </div>
  );
}

export default App;
