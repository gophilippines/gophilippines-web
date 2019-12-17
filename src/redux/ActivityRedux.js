// import { createStore } from "redux";
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
// export const store = createStore(
//     reducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// Reducer
export default function reducer(state = [], action) {
	switch (action.type) {
		case 'GET_ACTIVITY':
			return { ...state, data: action.payload };
		case 'ADD_ACTIVITY':
			return {
				...state,
				data: [ ...state, action.payload ]
			};
		case 'UPDATE_ACTIVITY':
			return action.payload;

		case 'DELETE_ACTIVITY':
			return {
				...state,
				data: state.data.filter((activity) => activity.name !== action.payload)
			};
		default:
			return state;
	}
}

export const getActivity = () => (dispatch) => {
	axios
		.get('/activityList')
		.then((res) => {
			dispatch({
				type: 'GET_ACTIVITY',
				payload: res.data
			});
		})
		.catch((err) => console.log(err));
};

export const addActivityAction = (activity, history) => (dispatch) => {
	axios
		.post(`/addActivity?id=${activity.city_id}`, activity)
		.then((res) => {
			dispatch({
				type: 'ADD_ACTIVITY',
				payload: res.data
			});
			window.location.href = '/dashboard/activity';
			// toastr.success(`Activty has been created `);
		})
		.catch((err) => {});
};

export const updateActivityAction = (activity) => (dispatch) => {
	axios
		.put(`/updateActivity?id=${activity.id}`, activity)
		.then((res) => {
			dispatch({
				type: 'UPDATE_ACTIVITY',
				payload: res.data
			});
			// history.push("/dashboard/activity");
			toastr.success(`Update Activity `);

			// window.location.href = "/dashboard/activity";
		})
		.catch((err) => {});
};

export const deleteActivityAction = (activityID) => (dispatch) => {
	getActivity();

	axios
		.delete(`/deleteActivity/${activityID}`)
		.then((res) => {
			dispatch({
				type: 'DELETE_ACTIVITY',
				payload: res.data
			});
			toastr.success(`Deleted`);
			window.location.href = '/dashboard/activity';
		})
		.catch((err) => {});
};

export const uploadActivityImageAction = (activity) => (dispatch) => {
	axios.post(`/activityImageUpload/${activity.id}`, activity.data).then((res) => {
		// console.log(res);
		toastr.success(`Update Activity `);
		window.location.href = `/dashboard/updateActivity/${activity.id}`;
	});
};
