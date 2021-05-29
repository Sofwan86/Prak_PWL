import { combineReducers } from "redux";
import beritas from "./beritas";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  beritas,
  form: formReducer,
});
