import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/root-reducer";
import windowAnimationMiddleware from '../middleware/window-animation'

const store = createStore(
    reducer,
    applyMiddleware(windowAnimationMiddleware)
);

export default store;