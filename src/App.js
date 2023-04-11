import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Popular from "./Popular";
import "./header.css";
import "./content.css";
import Home from "./Home";
import Trending from "./Trending";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Trending">
            <Trending />
          </Route>
          <Route path="/Popular">
            <Popular />
          </Route>
        </Switch>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
