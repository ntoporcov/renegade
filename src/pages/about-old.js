import {Link} from "react-router-dom";

function About() {
  return (
    <div className="App">
      <header className="text-center">
        <h2>
            <span>Mission Statement</span>
        </h2>
          <Link to="/"><button>Home</button></Link>
      </header>
    </div>
  );
}

export default About;
