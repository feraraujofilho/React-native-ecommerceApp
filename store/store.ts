import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./cart/reducers";
import rootReducer from "./rootReducer";
import ReduxThunk from "redux-thunk"

const middleWares = [ReduxThunk]
const middlewaresEnhancer = applyMiddleware(...middleWares)

export const store = createStore(rootReducer, composeWithDevTools(middlewaresEnhancer))