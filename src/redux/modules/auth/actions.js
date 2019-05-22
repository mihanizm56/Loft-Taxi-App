import { LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT } from "./constants";

export const loginSuccessAction = () => ({ type: LOGIN_STATE_SUCCESS });

export const loginFailedAction = () => ({ type: LOGIN_STATE_FAILED });

export const logoutAction = () => ({ type: LOGOUT });
