import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import one from "../src/images/4th guy.png";

function App() {
  return (
    <div className="App">
      <div className="center">
        <nav>
          <section className="navbar">
            <h1>King</h1>
            <ul class="navbar-list">
              <li>
                <a href="/">
                  Home{" "}
                  <FontAwesomeIcon className="plane" icon={faChevronDown} />
                </a>
              </li>
              <li>
                <a href="/about/">
                  About Us{" "}
                  <FontAwesomeIcon className="plane" icon={faChevronDown} />
                </a>
              </li>
              <li>
                <a href="/contactus/">
                  Contact us{" "}
                  <FontAwesomeIcon className="plane" icon={faChevronDown} />
                </a>
              </li>
            </ul>
            <button>Get Started</button>
          </section>
        </nav>
      </div>

      <section className="title">
        <h1>
          Give Your People <br /> a Platform
        </h1>
        <p>
          Create can-do culture with a modern <br /> HR platform built for
          growth
        </p>

        <img className="image-1" src={one} alt=""></img>
      </section>
    </div>
  );
}

export default App;
