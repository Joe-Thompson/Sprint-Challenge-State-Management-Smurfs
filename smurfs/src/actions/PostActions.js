import axios from "axios";

export const POST_SMURF_START = "FETCH_DOG_START";
export const POST_SMURF_SUCCESS = "FETCH_DOG_SUCCESS";
export const POST_SMURF_ERROR = "FETCH_DOG_ERROR";

export function postSmurfs(smurf) {
    // this is our "thunk" function. redux-thunk middleware
    // automatically gives us access to the dispatcher as a parameter
    return dispatch => {
        // we can kick off as many actions as we want,
        // whenever we want. allows our action creator to be asyncronous.
        dispatch({ type: POST_SMURF_START });

        axios
            .post("http://localhost:3333/smurfs", smurf)
            .then(res => {
                console.log(res.data);
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
            })
            .catch(err => {
                // enter the "error" state
                dispatch({ type: POST_SMURF_ERROR, payload: err });
            });
    };
}