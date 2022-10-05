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
import Profile from "../../frontend/src/component/user/Profile";
import EditProfile from "../../frontend/src/component/user/EditProfile";
import Products from "./component/Products/Products";
import AllCategories from "./component/Admin/AllCategories";
import CreateCategory from "./component/Admin/CreateCategory";
import UpdateCategory from "./component/Admin/EditCategory";
import Promotions from "./component/Promotions/ViewPromotions";
import Reportpromo from "./component/Promotions/ReportPromo";
import Addpromo from "./component/Promotions/AddPromotion";
import Updatepromo from "./component/Promotions/UpdatePromotion";
import Review from "./component/Review/ViewReview";
import ReportReview from "./component/Review/ReportReview";
import AddReview from "./component/Review/AddReview";
//Testing
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
          path="/admin/Categories"
          component={AllCategories}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/Category"
          component={CreateCategory}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/edit/category/:id"
          component={UpdateCategory}
        />
        <ProtectedRoute exact path="/me" component={Profile} />
        <ProtectedRoute exact path="/me/update/info" component={EditProfile} />
        //Ihill Routes
        <Route exact path="/admin/promotions" component={Promotions} />
        <Route exact path="/admin/GenReport" component={Reportpromo} />
        <Route exact path="/admin/AddPromotions" component={Addpromo} />
        <Route exact path="/admin/UpdatePromotions" component={Updatepromo} />
        <Route exact path="/admin/reviews" component={Review} />
        <Route exact path="/admin/GenReport/review" component={ReportReview} />
        <Route exact path="/admin/AddReview" component={AddReview} />
      </Switch>
    </Router>
  );
}

export default App;
