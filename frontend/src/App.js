import "./App.css";
import Home from "./component/Home/Home";
import UserData from './more/UserData';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignup from "./component/Authentication/LoginSignup";

function App() {

  const {isAuthenticated,user} = useSelector((state) =>state.user);
  
  return (
    <Router>
       {isAuthenticated && <UserData user={user} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginSignup} />
      </Switch>
    </Router>
  );
}

export default App;
