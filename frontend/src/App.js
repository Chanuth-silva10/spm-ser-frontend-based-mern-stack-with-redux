import "./App.css";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Promotions from "./component/Promotions/ViewPromotions";
import Addpromo from "./component/Promotions/AddPromotion";
import Reportpromo from "./component/Promotions/ReportPromo";
import Updatepromo from "./component/Promotions/UpdatePromotion";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />



        //Ihill routes
        <Route exact path="/adminHome/promotions" component={Promotions}/>
        <Route exact path="/adminHome/promotions/addpromo" component={Addpromo}/>
        <Route exact path="/adminHome/promotions/genreport" component={Reportpromo}/>
        <Route exact path="/adminHome/promotions/updatepromo" component={Updatepromo}/>
      </Switch>
    </Router>
  );
}

export default App;
