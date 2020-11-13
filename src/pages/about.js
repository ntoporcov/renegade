import './App.css';
import {Link} from "react-router-dom";

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is About
        </p>
          <Link to="/"><button>Home</button></Link>
      </header>
    </div>
  );
}

export default About;
