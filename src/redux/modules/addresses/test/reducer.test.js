import addressReducer from "../reducer";
import { EMPTY_ARRAY } from "../../../../constants";
import { SAVE_ALL_ROUTES, MAKE_NEW_OFFER, SAVE_CHOOSEN_COORDS_ROUTES } from "../constants";
import { removeCoordsAction, clearAdressRoute, saveAllCoordsAction, saveChoosenCoordsAction } from "../actions";

const initialState = {
	allRoutes: [],
	offerDone: false,
	choosenRouteCoords: [],
};

describe("SAVE_ALL_ROUTES action", () => {
	const state0 = addressReducer(undefined, "test");
	const state1 = addressReducer(state0, saveAllCoordsAction(EMPTY_ARRAY));

	it("get default value of routes in state1", () => {
		expect(state0.allRoutes).toEqual(EMPTY_ARRAY);
	});
	it("get all routes in state1", () => {
		expect(state1.allRoutes).toEqual(EMPTY_ARRAY);
	});
});

describe.only("SAVE_CHOOSEN_COORDS_ROUTES action", () => {
	const state0 = addressReducer(undefined, "test");
	const state1 = addressReducer(state0, saveChoosenCoordsAction(EMPTY_ARRAY));

	it("get default value of routes in state1", () => {
		expect(state0.choosenRouteCoords).toEqual(initialState.choosenRouteCoords);
		expect(state0.offerDone).toEqual(initialState.offerDone);
	});
	it("get all routes in state1", () => {
		expect(state1.choosenRouteCoords).toEqual(EMPTY_ARRAY);
		expect(state1.offerDone).toBeTruthy();
	});
});

describe("MAKE_NEW_OFFER action", () => {
	const state0 = addressReducer(undefined, "test");
	const state1 = addressReducer(state0, clearAdressRoute());

	it("get default value of routes in state1", () => {
		expect(state0.choosenRouteCoords).toEqual(initialState.choosenRouteCoords);
		expect(state0.offerDone).toEqual(initialState.offerDone);
	});
	it("get all routes in state1", () => {
		expect(state1.choosenRouteCoords).toEqual(EMPTY_ARRAY);
		expect(state1.offerDone).toBeFalsy();
	});
});
