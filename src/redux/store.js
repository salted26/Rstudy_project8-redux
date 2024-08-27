import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from "@redux-devtools/extension";
import rootRreducer  from "./reducers";
import {thunk} from "redux-thunk";

const store = createStore(
    rootRreducer,
    composeWithDevTools(
        applyMiddleware(thunk),
));

export default store;