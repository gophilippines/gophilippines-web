import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';
import activityReducer from './ActivityRedux';
import cityReducer from './CityRedux';
import transportReducer from './TransportRedux';
import bookingReducer from './BookingRedux';
import commentReducer from './CommentRedux';
// import userReducer from './UserRedux';

const initialState = {};

const middleware = [ thunk ];

const reducers = combineReducers({
	user: usersReducer,
	UI: uiReducer,
	activities: activityReducer,
	cities: cityReducer,
	transport: transportReducer,
	booking: bookingReducer,
	comment: commentReducer
	// users: userReducer
});

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
