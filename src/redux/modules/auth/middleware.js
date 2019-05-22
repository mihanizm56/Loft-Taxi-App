import { loginSuccessAction, loginFailedAction } from "./actions";
import { fetchLoginRequest } from "../../../services";

export const loginRequestAction = (email, password) => {
	if (email && password) {
		return dispatch => {
			fetchLoginRequest(email, password)
				.then(({ success }) => {
					if (success) {
						dispatch(loginSuccessAction());
					} else {
						dispatch(loginFailedAction());
					}
				})
				.catch(error => dispatch(loginFailedAction()) || alert(error));
		};
	}
};
