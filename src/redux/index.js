import { combineReducers } from "redux";
import bookmarkOperationReducer from "./reducers/bookmarkOperationReducer";

const rootReducer = combineReducers({ bookmarkOperationReducer })

export default rootReducer