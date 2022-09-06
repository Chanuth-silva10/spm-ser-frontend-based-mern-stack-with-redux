import "./App.css";
import Home from "./component/Home/Home";
import UserData from "./more/UserData";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignup from "./component/Authentication/LoginSignup";
import WebFont from "webfontloader";
import Store from "./store";
import { loadUser } from "./actions/userAction";
import ProductDetails from "./component/Products/ProductDetails";
import Cart from "./component/Cart/Cart";
import ProtectedRoute from "./route/ProtectedRoute";
import Dashboard from "./component/Admin/Dashboard";
import AllProducts from "./component/Admin/AllProducts";
import CreateProduct from "./component/Admin/CreateProduct";
import EditProduct from "../../frontend/src/component/Admin/EditProduct";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    Store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      {isAuthenticated && <UserData user={user} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/login" component={LoginSignup} />
        <Route exact path="/cart" component={Cart} />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/products"
          component={AllProducts}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/product"
          component={CreateProduct}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/edit/product/:id"
          component={EditProduct}
        />
      </Switch>
    </Router>
  );
}

export default App;
