import {
    SET_SUCCESSFUL_AUTH
} from '../actions/auth.actions';

const initialState = {
    successfulAuth: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SUCCESSFUL_AUTH:
            return Object.assign({}, state, {
                ...state,
                successfulAuth: action.val,
            });
        default:
            return state
    }
}