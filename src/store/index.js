import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/rootReducer";
import windowAnimationMiddleware from '../middleware/window-animation'

const store = createStore(
    reducer,
    applyMiddleware(windowAnimationMiddleware)
);

export default store;