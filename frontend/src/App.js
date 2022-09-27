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
import AllUsers from "../../frontend/src/component/Admin/AllUsers";
import UpdateUser from "../../frontend/src/component/Admin/UpdateUser";
import Category from "./component/Admin/Category";
import Profile from "../../frontend/src/component/user/Profile";
import EditProfile from "../../frontend/src/component/user/EditProfile";
import Products from "./component/Products/Products";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins"],
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
        <Route exact path="/products/:keyword" component={Products} />
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
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/users"
          component={AllUsers}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/user/:id"
          component={UpdateUser}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/addCategory"
          component={Category}
        />
        <ProtectedRoute exact path="/me" component={Profile} />
        <ProtectedRoute exact path="/me/update/info" component={EditProfile} />
      </Switch>
    </Router>
  );
}

export default App;
