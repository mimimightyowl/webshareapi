import logo from "./logo.svg";
import "./App.css";

function App() {
  const shareUrl = "https://www.youtube.com/";
  const handleSmsButtonClick = () => {
    // eslint-disable-next-line no-undef
    window.location.href = `sms:&body=Take a ride with me: ${shareUrl}`;
    // const url = window.location.href;
    // navigator.share({
    //   url,
    //   text: ` Take a ride with me: ${shareUrl}`,
    //   title: "Title",
    // });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
        <div onClick={() => handleSmsButtonClick()}>Webshare API</div>
      </header>{" "}
    </div>
  );
}

export default App;
