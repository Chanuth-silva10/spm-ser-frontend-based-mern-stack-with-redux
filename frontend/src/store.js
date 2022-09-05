import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
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
const reducer = combineReducers({
  products: productsReducer,
  allUsers: allUsersReducer,
  productDetails: productDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  userDetails: userDetailsReducer,
  profile: profileReducer,
  user: userReducer,
  cart: cartReducer,
  favourite: favouriteReducer,
});

const middleWare = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
