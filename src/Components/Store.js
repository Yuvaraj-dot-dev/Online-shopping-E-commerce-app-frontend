import { combineReducers, legacy_createStore as createStore } from "redux";
import cartReducer from "./Reducers/Reducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer
});
const store = createStore(rootReducer);

export default store;
