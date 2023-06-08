import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducer from "./components/reducers/reducer";

export default createStore(reducer, applyMiddleware(logger));
