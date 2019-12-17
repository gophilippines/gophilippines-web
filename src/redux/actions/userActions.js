import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, LOADING_USER } from '../types';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export const loginUser = (userData, history) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.post('/login', userData)
		.then((res) => {
			console.log(res.data);
			setAuthorizationHeader(res.data.token);
			localStorage.setItem('UID', res.data.uid);
			dispatch(getUserData(res.data.uid));
			dispatch({ type: CLEAR_ERRORS });

			history.push('/');
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				payload: err.response.data
			});
		});
};

export const getUserData = (UID) => (dispatch) => {
	dispatch({ type: LOADING_USER });
	axios
		.get(`/userById?id=${UID}`)
		.then((res) => {
			console.log(res);
			localStorage.setItem('userName', res.data.first_name + ' ' + res.data.last_name);
			localStorage.setItem('userImage', res.data.imageURL);
			dispatch({
				type: SET_USER,
				payload: res.data
			});
		})
		.catch((err) => console.log(err));
};

export const signupUser = (newUserData, history) => (dispatch) => {
	console.log(newUserData);
	dispatch({ type: LOADING_UI });
	axios
		.post('/signup', newUserData)
		.then((res) => {
			setAuthorizationHeader(res.data.token);
			dispatch(getUserData());
			dispatch({ type: CLEAR_ERRORS });
			history.push('/');
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				payload: err.response.data
			});
		});
};

export const logoutUser = () => (dispatch) => {
	alert('logout');
	localStorage.removeItem('IdToken');
	localStorage.removeItem('UID');
	localStorage.removeItem('userName');
	localStorage.removeItem('userImage');
	delete axios.defaults.headers.common['Authorization'];
	dispatch({ type: SET_UNAUTHENTICATED });
};

export const uploadUserImageAction = (user) => (dispatch) => {
	axios.post(`/user/image?id=${user.id}`, user.data).then((res) => {
		// console.log(res);
		toastr.success(`Update Activity `);
		window.location.href = `/dashboard/account/`;
	});
};

const setAuthorizationHeader = (token) => {
	const IdToken = `Bearer: ${token}`;
	localStorage.setItem('IdToken', token);
	axios.defaults.headers.common['Authorization'] = IdToken;
};
