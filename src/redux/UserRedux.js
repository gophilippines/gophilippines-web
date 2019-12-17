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
		case 'GET_USER':
			return { ...state, data: action.payload };
		case 'ADD_USER':
			return {
				...state,
				data: [ ...state, action.payload ]
			};
		case 'UPDATE_USER':
			return action.payload;

		case 'DELETE_USER':
			return {
				...state,
				data: state.data.filter((user) => user.name !== action.payload)
			};
		default:
			return state;
	}
}

export const getUser = () => (dispatch) => {
	axios
		.get('/userList')
		.then((res) => {
			dispatch({
				type: 'GET_USER',
				payload: res.data
			});
		})
		.catch((err) => console.log(err));
};

export const addUserAction = (user, history) => (dispatch) => {
	axios
		.post(`/signup`, user)
		.then((res) => {
			dispatch({
				type: 'ADD_USER',
				payload: res.data
			});
			window.location.href = '/dashboard/user';
			// toastr.success(`Activty has been created `);
		})
		.catch((err) => {});
};

export const updateUserAction = (user) => (dispatch) => {
	axios
		.put(`/updateUser?id=${user.id}`, user)
		.then((res) => {
			dispatch({
				type: 'UPDATE_USER',
				payload: res.data
			});
			// history.push("/dashboard/user");
			toastr.success(`Update User `);

			// window.location.href = "/dashboard/user";
		})
		.catch((err) => {});
};

export const deleteUserAction = (userID) => (dispatch) => {
	getUser();

	axios
		.delete(`/deleteUser/${userID}`)
		.then((res) => {
			dispatch({
				type: 'DELETE_USER',
				payload: res.data
			});
			toastr.success(`Deleted`);
			window.location.href = '/dashboard/user';
		})
		.catch((err) => {});
};

export const uploadUserImageAction = (user) => (dispatch) => {
	axios.post(`/userImageUpload/${user.id}`, user.data).then((res) => {
		// console.log(res);
		toastr.success(`Update User `);
		window.location.href = `/dashboard/updateUser/${user.id}`;
	});
};
