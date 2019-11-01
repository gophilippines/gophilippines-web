import {
    SET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_UNAUTHENTICATED,
    LOADING_USER
} from "../types";
import axios from "axios";

export const loginUser = (userData, history) => dispatch => {
    dispatch({ type: LOADING_UI });
    axios
        .post("/login", userData)
        .then(res => {
            console.log(res.data);
            setAuthorizationHeader(res.data.token);
            dispatch(getUserData(res.data.uid));
            dispatch({ type: CLEAR_ERRORS });

            history.push("/dashboard");
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
};

export const getUserData = UID => dispatch => {
    dispatch({ type: LOADING_USER });
    axios
        .get(`/userById?id=${UID}`)
        .then(res => {
            console.log(res);
            dispatch({
                type: SET_USER,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// export const signupUser = (newUserData, history) => dispatch => {
//     dispatch({ type: LOADING_UI });
//     axios
//         .post("/signup", newUserData)
//         .then(res => {
//             setAuthorizationHeader(res.data.token);
//             dispatch(getUserData());
//             dispatch({ type: CLEAR_ERRORS });
//             history.push("/");
//         })
//         .catch(err => {
//             dispatch({
//                 type: SET_ERRORS,
//                 payload: err.response.data
//             });
//         });
// };

export const logoutUser = () => dispatch => {
    localStorage.removeItem("IdToken");
    delete axios.defaults.headers.common["Authorization"];
    dispatch({ type: SET_UNAUTHENTICATED });
};

const setAuthorizationHeader = token => {
    const IdToken = `Bearer: ${token}`;
    localStorage.setItem("IdToken", token);
    axios.defaults.headers.common["Authorization"] = IdToken;
};
