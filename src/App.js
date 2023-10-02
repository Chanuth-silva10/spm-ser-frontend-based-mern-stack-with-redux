import "./App.css";
import Home from "./component/Home/Home";
import UserData from "./more/UserData";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignup from "./component/Authentication/LoginSignup";
import WebFont from "webfontloader";
import Store from "./store";
import { loadUser } from "./actions/userAction";
import ProductDetails from "./component/Products/ProductDetails";
import Cart from "./component/Cart/Cart";
import Dashboard from "./component/Admin/Dashboard";
import AllProducts from "./component/Admin/AllProducts";
import CreateProduct from "./component/Admin/CreateProduct";
import EditProduct from "./component/Admin/EditProduct";
import UpdatePassword from './component/user/UpdatePassword';
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./component/Cart/Payment";
import Notfound from "./more/Notfound";
import Success from "./component/Cart/Success";
import MyOrder from "./component/user/MyOrder";
import MyOrderDetails from "./component/user/MyOrderDetails";
import AllOrder from "./component/Admin/AllOrder";
import UpdateOrder from "./component/Admin/UpdateOrder";

import AllUsers from "./component/Admin/AllUsers";
import UpdateUser from "./component/Admin/UpdateUser";
import Profile from "./component/user/Profile";
import EditProfile from "./component/user/EditProfile";
import Products from "./component/Products/Products";
import AllCategories from "./component/Admin/AllCategories";
import CreateCategory from "./component/Admin/CreateCategory";
import UpdateCategory from "./component/Admin/EditCategory";

import AllBrands from "./component/Admin/AllBrands";
import CreateBrand from "./component/Admin/CreateBrand";
import UpdateBrand from "./component/Admin/EditBrand";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");
  
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v2/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins"],
      },
    });

    Store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      {isAuthenticated && <UserData user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Route exact path="/process/payment" component={Payment} />
        </Elements>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/login" component={LoginSignup} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products/:keyword" component={Products} />
        <Route exact path="/shipping" component={Shipping} />
        <Route
         
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <Route
          exact
          path="/admin/products"
          component={AllProducts}
        />
        <Route
          exact
          path="/admin/product"
          component={CreateProduct}
        />
        <Route
          exact
          path="/edit/product/:id"
          component={EditProduct}
        />
        <Route
          exact
          path="/admin/users"
          component={AllUsers}
        />
        <Route
          exact
          path="/admin/orders"
          component={AllOrder}
        />
        <Route
          exact
          path="/admin/order/:id"
          component={UpdateOrder}
        />
        <Route
          exact
          path="/admin/user/:id"
          component={UpdateUser}
        />
        <Route exact path="/me/update" component={UpdatePassword} />
        <Route exact path="/order/confirm" component={ConfirmOrder} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/orders" component={MyOrder} />
        <Route exact path="/order/:id" component={MyOrderDetails} />
        <Route
          exact
          path="/admin/Categories"
          component={AllCategories}
        />
        <Route
          exact
          path="/admin/Category"
          component={CreateCategory}
        />
        <Route
          exact
          path="/edit/category/:id"
          component={UpdateCategory}
        />
        <Route exact path="/me" component={Profile} />
        <Route exact path="/me/update/info" component={EditProfile} />
        <Route
          exact
          path="/admin/brands"
          component={AllBrands}
        />
        <Route
          exact
          path="/admin/brand"
          component={CreateBrand}
        />
        <Route
          exact
          path="/edit/brand/:id"
          component={UpdateBrand}
        />
      </Switch>
    </Router>
  );
}

export default App;
