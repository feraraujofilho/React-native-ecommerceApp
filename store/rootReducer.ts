import { combineReducers } from "redux";
import cartReducer from "./cart/reducers";
import userProductsReducer from "./products/reducers";

export default combineReducers({ productState: cartReducer, userProductsState: userProductsReducer })