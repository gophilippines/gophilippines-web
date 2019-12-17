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
		case 'GET_COMMENT':
			return { ...state, data: action.payload };
		case 'ADD_COMMENT':
			return {
				...state,
				data: [ ...state, action.payload ]
			};
		case 'UPDATE_COMMENT':
			return action.payload;

		case 'DELETE_COMMENT':
			return {
				...state,
				data: state.data.filter((comment) => comment.name !== action.payload)
			};
		default:
			return state;
	}
}

export const getComment = () => (dispatch) => {
	axios
		.get('/commentList')
		.then((res) => {
			dispatch({
				type: 'GET_COMMENT',
				payload: res.data
			});
		})
		.catch((err) => console.log(err));
};

export const addCommentAction = (comment, history) => (dispatch) => {
	axios
		.post(`/activityRating?id=${comment.activityID}`, comment)
		.then((res) => {
			dispatch({
				type: 'ADD_COMMENT',
				payload: res.data
			});

			// window.location.href = '/dashboard/comment';
			toastr.success(`Comment has been created `);
		})
		.catch((err) => {});
	axios.post(`/updateRating`, comment).then((res) => {}).catch((err) => {});
};

export const updateCommentAction = (comment) => (dispatch) => {
	axios
		.put(`/updateComment?id=${comment.id}`, comment)
		.then((res) => {
			dispatch({
				type: 'UPDATE_COMMENT',
				payload: res.data
			});
			// history.push("/dashboard/comment");
			toastr.success(`Update Comment `);

			// window.location.href = "/dashboard/comment";
		})
		.catch((err) => {});
};

export const deleteCommentAction = (commentID) => (dispatch) => {
	getComment();

	axios
		.delete(`/deleteComment/${commentID}`)
		.then((res) => {
			dispatch({
				type: 'DELETE_COMMENT',
				payload: res.data
			});
			toastr.success(`Deleted`);
			window.location.href = '/dashboard/comment';
		})
		.catch((err) => {});
};

export const uploadCommentImageAction = (comment) => (dispatch) => {
	axios.post(`/commentImageUpload/${comment.id}`, comment.data).then((res) => {
		// console.log(res);
		toastr.success(`Update Comment `);
		window.location.href = `/dashboard/updateComment/${comment.id}`;
	});
};
