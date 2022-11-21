import { applyMiddleware, createStore } from "redux";
import Reducer2 from "./Reducer";
import thunk from 'redux-thunk';




const store2 = createStore(Reducer2 , applyMiddleware(thunk) );







export default store2;