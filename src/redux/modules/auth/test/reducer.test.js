import authReducer from "../reducer";
import { LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT } from "../constants";
import { loginSuccessAction, loginFailedAction, logoutAction } from "../actions";

const initialState = {
	login: false,
};

describe("LOGIN_STATE_SUCCESS action", () => {
	const state0 = authReducer(undefined, "test");
	const state1 = authReducer(state0, loginSuccessAction());

	it("get default state in login in state0", () => {
		expect(state0.login).toBeFalsy();
	});
	it("get true state in login in state1", () => {
		expect(state1.login).toBeTruthy();
	});
});

describe("LOGIN_STATE_FAILED action", () => {
	const state0 = authReducer(undefined, "test");
	const state1 = authReducer(state0, loginSuccessAction());
	const state2 = authReducer(state1, loginFailedAction());

	it("get default state in login in state0", () => {
		expect(state0.login).toBeFalsy();
	});
	it("get success state in login in state1", () => {
		expect(state1.login).toBeTruthy();
	});
	it("get failed state in login in state2", () => {
		expect(state2.login).toBeFalsy();
	});
});

describe("LOGOUT action", () => {
	const state0 = authReducer(undefined, "test");
	const state1 = authReducer(state0, loginSuccessAction());
	const state2 = authReducer(state1, logoutAction());

	it("get success state in login in state1", () => {
		expect(state1.login).toBeTruthy();
	});
	it("get false state in login in state2", () => {
		expect(state2.login).toBeFalsy();
	});
});
