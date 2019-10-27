import axios from "axios";
import { GET_SMURF_ERROR, GET_SMURF_SUCCESS, GET_SMURF_START } from "./GetActions";

export function postSmurfs(smurf) {
    return dispatch => {
        dispatch({ type: GET_SMURF_START });

        axios
            .post("http://localhost:3333/smurfs", smurf)
            .then(res => {
                dispatch({ type: GET_SMURF_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: GET_SMURF_ERROR, payload: err });
            });
    };
}