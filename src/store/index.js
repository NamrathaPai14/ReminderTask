import { combineReducers, createStore } from "redux";
import { menuReducer } from "./Menu";

const reducers = {
    menuReducer
}

const store = createStore(
    combineReducers(reducers)
);

window.rootStore = store;

export default store;