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
  categoryReducer,
  deleteCategoryReducer,
  newCategoryReducer,
  categoryDetailsReducer,
} from "./reducers/CategoryReducer";
import {
  brandReducer,
  deleteBrandReducer,
  newBrandReducer,
  brandDetailsReducer,
} from "./reducers/BrandReducer";
const reducer = combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  brands: brandReducer,
  productDetails: productDetailsReducer,
  categoryDetails: categoryDetailsReducer,
  brandDetails: brandDetailsReducer,
  allUsers: allUsersReducer,
  forgotPassword: forgotPasswordReducer,
  deleteProduct: deleteProductReducer,
  deleteCategory: deleteCategoryReducer,
  deleteBrand: deleteBrandReducer,
  userDetails: userDetailsReducer,
  profile: profileReducer,
  createProduct: newProductReducer,
  createCategory: newCategoryReducer,
  createBrand: newBrandReducer,
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
