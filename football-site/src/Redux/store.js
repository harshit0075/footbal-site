import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {reducer as authReducer} from "../Redux/Authentication/reducer" 
import thunk from "redux-thunk"
import {reducer as matchReducer} from "../Redux/Matches/reducer"
import {reducer as watchListReducer} from "../Redux/WatchList/reducer"
const rootReducer = combineReducers({
  authReducer,
  matchReducer,
  watchListReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
