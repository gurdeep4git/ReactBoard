import { combineReducers } from "redux";
import reducer from "../pages/corona-report/reducer";

export default combineReducers({
    coronaReport: reducer
});