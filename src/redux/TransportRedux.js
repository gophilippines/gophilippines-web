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
		case 'GET_TRANSPORT':
			return { ...state, data: action.payload };
		case 'ADD_TRANSPORT':
			return {
				...state,
				data: [ ...state, action.payload ]
			};
		case 'UPDATE_TRANSPORT':
			return action.payload;

		case 'DELETE_TRANSPORT':
			return {
				...state,
				data: state.data.filter((transport) => transport.name !== action.payload)
			};
		default:
			return state;
	}
}

export const getTransport = () => (dispatch) => {
	axios
		.get('/transportationList')
		.then((res) => {
			dispatch({
				type: 'GET_TRANSPORT',
				payload: res.data
			});
		})
		.catch((err) => console.log(err));
};

export const addTransportAction = (transport, history) => (dispatch) => {
	axios
		.post(`/addTransportation?id=${transport.city_id}`, transport)
		.then((res) => {
			dispatch({
				type: 'ADD_TRANSPORT',
				payload: res.data
			});
			window.location.href = '/dashboard/transport';
			// toastr.success(`Activty has been created `);
		})
		.catch((err) => {});
};

export const updateTransportAction = (transport) => (dispatch) => {
	console.log(transport);
	axios
		.put(`/updateTransportation?id=${transport.id}`, transport)
		.then((res) => {
			dispatch({
				type: 'UPDATE_TRANSPORT',
				payload: res.data
			});
			// history.push("/dashboard/transport");
			toastr.success(`Update Transport `);

			// window.location.href = "/dashboard/transport";
		})
		.catch((err) => {});
};

export const deleteTransportAction = (transportID) => (dispatch) => {
	getTransport();

	axios
		.delete(`/deleteTransportation/${transportID}`)
		.then((res) => {
			dispatch({
				type: 'DELETE_TRANSPORT',
				payload: res.data
			});
			toastr.success(`Deleted`);
			window.location.href = '/dashboard/transport';
		})
		.catch((err) => {});
};

export const uploadTransportImageAction = (transport) => (dispatch) => {
	axios.post(`/transportationImageUpload/${transport.id}`, transport.data).then((res) => {
		// console.log(res);
		toastr.success(`Update transport image`);
		window.location.href = `/dashboard/updateTransport/${transport.id}`;
	});
};
