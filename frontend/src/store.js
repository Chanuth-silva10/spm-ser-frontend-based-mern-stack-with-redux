import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducers/ProductReducer";

import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  products: productsReducer,
  allUsers: allUsersReducer,
  forgotPassword:forgotPasswordReducer,
  userDetails: userDetailsReducer,
  profile: profileReducer,
  user: userReducer,
});

const middleWare = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
