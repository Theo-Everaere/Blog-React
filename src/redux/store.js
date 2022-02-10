import { createStore, applyMiddleware, combineReducers } from "redux";
import articleReducer from "./articles/articleReducer";
import thunk from "redux-thunk"

const rootReducter = combineReducers({
    articleReducer
})

const store = createStore(rootReducter, applyMiddleware(thunk));

export default store;