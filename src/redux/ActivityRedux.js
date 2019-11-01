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
                activity: [...state.activity, action.payload]
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
        .get("/activityByCityId?id=3bhJa26hT9nbSfCvSzhp")
        .then(res => {
            console.log(res.data);
            dispatch({
                type: "GET_ACTIVITY",
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};
export const addActivityAction = activity => dispatch => {
    axios
        .post(`/addActivity?id=${activity.city_id}`, activity)
        .then(res => {
            dispatch({ type: "ADD_ACTIVITY" });
            dispatch({ payload: res.data });
            getActivity();
        })
        .catch(err => {});
};

export const deleteTodoAction = ActivityID => ({
    type: "DELETE_ACTIVITY",
    payload: ActivityID
});
