import { loginSuccessAction, loginFailedAction, logoutAction } from "../actions";
import { LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT } from "../constants";

describe("Auth redux-module actions test", () => {
	it("loginSuccessAction returns correct action", () => {
		const correctAction = {
			type: LOGIN_STATE_SUCCESS,
		};
		expect(loginSuccessAction()).toEqual(correctAction);
	});
	it("loginFailedAction returns correct action", () => {
		const correctAction = {
			type: LOGIN_STATE_FAILED,
		};
		expect(loginFailedAction()).toEqual(correctAction);
	});
	it("logoutAction returns correct action", () => {
		const correctAction = {
			type: LOGOUT,
		};
		expect(logoutAction()).toEqual(correctAction);
	});
});
