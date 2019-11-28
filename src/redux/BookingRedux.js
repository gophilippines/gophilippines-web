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
		case 'GET_BOOKING':
			return { ...state, data: action.payload };
		case 'ADD_BOOKING':
			return {
				...state,
				data: [ ...state, action.payload ]
			};
		case 'UPDATE_BOOKING':
			return action.payload;

		case 'DELETE_BOOKING':
			return {
				...state,
				data: state.data.filter((booking) => booking.name !== action.payload)
			};
		default:
			return state;
	}
}

export const getBooking = () => (dispatch) => {
	axios
		.get('/bookingList')
		.then((res) => {
			dispatch({
				type: 'GET_BOOKING',
				payload: res.data
			});
		})
		.catch((err) => console.log(err));
};

export const addBookingAction = (booking, history) => (dispatch) => {
	axios
		.post(`/addBooking?id=${booking.city_id}`, booking)
		.then((res) => {
			dispatch({
				type: 'ADD_BOOKING',
				payload: res.data
			});
			window.location.href = '/dashboard/booking';
			// toastr.success(`Activty has been created `);
		})
		.catch((err) => {});
};

export const updateBookingAction = (booking) => (dispatch) => {
	axios
		.put(`/updateBooking?id=${booking.id}`, booking)
		.then((res) => {
			dispatch({
				type: 'UPDATE_BOOKING',
				payload: res.data
			});
			// history.push("/dashboard/booking");
			toastr.success(`Update Booking `);

			// window.location.href = "/dashboard/booking";
		})
		.catch((err) => {});
};

export const deleteBookingAction = (bookingID) => (dispatch) => {
	getBooking();

	axios
		.delete(`/deleteBooking/${bookingID}`)
		.then((res) => {
			dispatch({
				type: 'DELETE_BOOKING',
				payload: res.data
			});
		})
		.catch((err) => {});
};

export const uploadBookingImageAction = (booking) => (dispatch) => {
	axios.post(`/bookingImageUpload/${booking.id}`, booking.data).then((res) => {
		// console.log(res);
	});
};
