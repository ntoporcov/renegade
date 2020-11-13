import './App.css';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is Home
        </p>
          <Link to="/about"><button>About</button></Link>
      </header>
    </div>
  );
}

export default Home;
