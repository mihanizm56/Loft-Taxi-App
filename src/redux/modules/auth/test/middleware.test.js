import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { loginRequestAction } from "../middleware";
import { loginSuccessAction, loginFailedAction } from "../actions";
import { findAction, getAction } from "../../../../utils";
import { LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED } from "../constants";
import { EMPTY_ARRAY } from "../../../../constants";

const mockStore = configureMockStore([thunk]);

describe("Adress middleware test", () => {
	it("fetches correct user data and set LOGIN_STATE_SUCCESS", async () => {
		const store = mockStore();
		store.dispatch(loginRequestAction("test@test.com", "123123"));

		expect(await getAction(store, "LOGIN_STATE_SUCCESS")).toEqual({
			type: "LOGIN_STATE_SUCCESS",
		});
	});
	it("fetches incorrect user data and set LOGIN_STATE_FAILED", async () => {
		const store = mockStore();
		store.dispatch(loginRequestAction("tessdst@test.com", "123123"));

		expect(await getAction(store, "LOGIN_STATE_FAILED")).toEqual({
			type: "LOGIN_STATE_FAILED",
		});
	});
});
