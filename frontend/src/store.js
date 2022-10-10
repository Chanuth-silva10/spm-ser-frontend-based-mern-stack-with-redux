import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
  deleteProductReducer,
  newProductReducer,
} from "./reducers/ProductReducer";
import { cartReducer } from "./reducers/CartReducer";
import { favouriteReducer } from "./reducers/FavouriteReducer";
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/OrderReducer";



import {
  categoryReducer,
  deleteCategoryReducer,
  newCategoryReducer,
  categoryDetailsReducer,
} from "./reducers/CategoryReducer";

const reducer = combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  productDetails: productDetailsReducer,
  categoryDetails: categoryDetailsReducer,
  allUsers: allUsersReducer,
  forgotPassword: forgotPasswordReducer,
  deleteProduct: deleteProductReducer,
  deleteCategory: deleteCategoryReducer,
  userDetails: userDetailsReducer,
  profile: profileReducer,
  createProduct: newProductReducer,
  createCategory: newCategoryReducer,
  user: userReducer,
  cart: cartReducer,
  favourite: favouriteReducer,
  AllOrders: allOrdersReducer,
  favourite: favouriteReducer,
  order: newOrderReducer,
  myOrder: myOrdersReducer,
  myOrderDetails: orderDetailsReducer,
  deleteOrder: orderReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],

    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  favourite: {
    favouriteItems: localStorage.getItem("favouriteItems")
      ? JSON.parse(localStorage.getItem("favouriteItems"))
      : [],
  },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
