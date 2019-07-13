import { combineReducers } from "redux";
import matchReducer from "./matchReducer";
import signUpReducer from "./signUpReducer";

export default combineReducers({
  matches: matchReducer,
  signedUp: signUpReducer
});
