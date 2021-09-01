import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //vamos a hacer llamadas asincronas por eso necesito esto
import reducer from "../reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
