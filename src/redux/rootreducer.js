import { combineReducers } from "redux";
import JobReducer from "./Jobreducer";
const rootReducer = combineReducers({
  users: JobReducer,
});

export default rootReducer;
