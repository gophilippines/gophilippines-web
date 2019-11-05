// import { createStore } from "redux";
import axios from "axios";

// export const store = createStore(
//     reducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// Reducer
export default function reducer(state = [], action) {
    switch (action.type) {
        case "GET_ACTIVITY":
            return {
                ...state,
                data: [...state, action.payload]
            };
        case "ADD_ACTIVITY":
            return {
                ...state,
                data: [...state, action.payload]
            };

        case "DELETE_ACTIVITY":
            return {
                ...state,
                activity: state.activity.filter(
                    activity => activity.id !== action.payload
                )
            };
        default:
            return state;
    }
}

export const getActivity = () => dispatch => {
    axios
        .get("/activityList")
        .then(res => {
            dispatch({
                type: "GET_ACTIVITY",
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const addActivityAction = (activity, history) => dispatch => {
    axios
        .post(`/addActivity?id=${activity.city_id}`, activity)
        .then(res => {
            dispatch({
                type: "ADD_ACTIVITY",
                payload: res.data
            });
            history.push("/dashboard/activity");
        })
        .catch(err => {});
};

export const updateActivityAction = activity => dispatch => {
    axios
        .put(`/updateActivity?id=${activity.id}`, activity)
        .then(res => {
            dispatch({
                type: "UPDATE_ACTIVITY",
                payload: res.data
            });
            // history.push("/dashboard/activity");
        })
        .catch(err => {});
};

export const deleteActivityAction = activityID => dispatch => {
    axios
        .delete(`/deleteActivity/${activityID}`)
        .then(res => {
            dispatch({
                type: "DELETE_ACTIVITY",
                payload: res.data
            });
        })
        .catch(err => {});
};

export const uploadActivityImageAction = activity => dispatch => {
    axios
        .post(`/activityImageUpload/${activity.id}`, activity.data)
        .then(res => {
            console.log(res);
        });
};
