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
        case "GET_CITY":
            return {
                ...state,
                data: [...state, action.payload]
            };
        case "ADD_CITY":
            return {
                ...state,
                data: [...state, action.payload]
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

export const getCity = () => dispatch => {
    axios
        .get("/cityList")
        .then(res => {
            dispatch({
                type: "GET_CITY",
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const addCityAction = (city, history) => dispatch => {
    axios
        .post(`/addCity`, city)
        .then(res => {
            dispatch({
                type: "ADD_CITY",
                payload: res.data
            });
            history.push("/dashboard/city");
        })
        .catch(err => {});
};

export const updateCityAction = city => dispatch => {
    axios
        .put(`/updateCity?id=${city.id}`, city)
        .then(res => {
            dispatch({
                type: "UPDATE_CITY",
                payload: res.data
            });
            // history.push("/dashboard/city");
        })
        .catch(err => {});
};

export const deleteCityAction = cityID => dispatch => {
    axios
        .delete(`/deleteCity/${cityID}`)
        .then(res => {
            // dispatch({
            //     type: "DELETE_CITY",
            //     payload: res.data
            // });
        })
        .catch(err => {});
};
