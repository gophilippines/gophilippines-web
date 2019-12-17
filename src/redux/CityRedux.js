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
		case 'GET_CITY':
			// return {
			//     ...state,
			//     data: [...state, action.payload]
			// };
			return {
				...state,
				data: action.payload
			};
		case 'ADD_CITY':
			return {
				...state,
				data: [ ...state, action.payload ]
			};

		// case "DELETE_CITY":
		//     return {
		//         ...state,
		//         city: state.city.filter(
		//             city => city.id !== action.payload
		//         )
		//     };
		default:
			return state;
	}
}

export const getCity = () => (dispatch) => {
	axios
		.get('/cityList')
		.then((res) => {
			dispatch({
				type: 'GET_CITY',
				payload: res.data
			});
		})
		.catch((err) => console.log(err));
};

export const addCityAction = (city, history) => (dispatch) => {
	axios
		.post(`/addCity`, city)
		.then((res) => {
			dispatch({
				type: 'ADD_CITY',
				payload: res.data
			});
			window.location.href = '/dashboard/city';
		})
		.catch((err) => {});
};

export const updateCityAction = (city) => (dispatch) => {
	axios
		.put(`/updateCity?id=${city.id}`, city)
		.then((res) => {
			dispatch({
				type: 'UPDATE_CITY',
				payload: res.data
			});
			// history.push("/dashboard/city");
			toastr.success(`Update City `);
		})
		.catch((err) => {});
};

export const deleteCityAction = (cityID) => (dispatch) => {
	axios
		.delete(`/deleteCity/${cityID}`)
		.then((res) => {
			// dispatch({
			//     type: "DELETE_CITY",
			//     payload: res.data
			// });
			toastr.success(`Deleted`);
			window.location.href = '/dashboard/city';
		})
		.catch((err) => {});
};

export const uploadCityImageAction = (city) => (dispatch) => {
	axios.post(`/cityImageUpload/${city.id}`, city.data).then((res) => {
		// console.log(res);
		toastr.success(`Update City image`);
		window.location.href = `/dashboard/updateCity/${city.id}`;
	});
};
