import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import activityReducer from "./ActivityRedux";
import cityReducer from "./CityRedux";
import transportReducer from "./TransportRedux";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    user: userReducer,
    UI: uiReducer,
    activities: activityReducer,
    cities: cityReducer,
    transport: transportReducer
});

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
