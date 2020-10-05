import { combineReducers } from "redux";
import productReducer from "./cart/reducers";

export default combineReducers({ productState: productReducer })