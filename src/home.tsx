import { Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div className="layout">
      <div className="logo-container">
        <img src="/logo.png" alt="Syntax Craft Logo" />
        <h1>SYNTAX CRAFT</h1>
      </div>
      <div className="left-panel">
        <p>
            Welcome to Syntax Craft — your go-to platform for mastering code! Below is our Markdown Previewer, a handy tool that lets you write and preview markdown in real time. Whether you're documenting code, crafting README files, or learning markdown syntax, this tool will make the process seamless and interactive.
        </p>
        <div className="button-container">
          <Link to="/preview">
            <button>Let's Start</button>
          </Link>
          <Link to="/about">
            <button>About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
