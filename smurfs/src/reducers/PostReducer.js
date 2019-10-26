import {GET_SMURF_ERROR, GET_SMURF_START, GET_SMURF_SUCCESS} from "../actions/GetActions";

const initialState = {
    smurf: [{
        name: '',
        height: '',
        age: ''
    }],
    isLoading: false,
    error: null
};

// our finite state machine written out in code--
// all the possible states, and actions that can be taken
// which result in a new state.
export function getReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SMURF_START:
            return {
                ...state,
                isLoading: true
            };
        case GET_SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false
            };
        case GET_SMURF_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}