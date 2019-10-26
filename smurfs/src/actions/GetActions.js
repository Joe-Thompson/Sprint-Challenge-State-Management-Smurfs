import axios from "axios";

export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_ERROR = "GET_SMURF_ERROR";

export function getSmurfs() {

    return dispatch => {

        dispatch({ type: GET_SMURF_START });

        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                dispatch({ type: GET_SMURF_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: GET_SMURF_ERROR, payload: err });
            });
    };
}