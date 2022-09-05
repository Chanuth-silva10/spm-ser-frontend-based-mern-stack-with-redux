import "./App.css";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
