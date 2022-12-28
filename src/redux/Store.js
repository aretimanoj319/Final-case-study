import { applyMiddleware, createStore} from "redux";
import reduxThunk from "redux-thunk";
//import {createStore} from "redux";
import rootreducer from "./rootreducer";
//import { composeWithDevTools } from "redux-devtools-extension";
const middlewares=[reduxThunk]
const Store = createStore(rootreducer,applyMiddleware(...middlewares));
// const store = createStore(employeeReducer);
export default Store;