/*
 * action types
 */

export const SET_SUCCESSFUL_AUTH = 'SET_SUCCESSFUL_AUTH';

/*
 * action creators
 */

export function setSuccessfulAuth(val : boolean) {
    return { type: SET_SUCCESSFUL_AUTH, val }
}