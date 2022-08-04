// store

import {createStore, combineReducers} from "redux";
import changeTodo from "./redux/changeTodo";

const roootReducer = combineReducers({changeTodo});
const store = createStore(roootReducer);

export default store;