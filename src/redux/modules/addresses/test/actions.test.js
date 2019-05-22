import { removeCoordsAction, clearAdressRoute, saveAllCoordsAction, saveChoosenCoordsAction } from "../actions";
import { REMOVE_COORDS, SAVE_ALL_ROUTES, MAKE_NEW_OFFER, SAVE_CHOOSEN_COORDS_ROUTES } from "../constants";

describe("Auth redux-module actions test", () => {
	it("removeCoordsAction returns correct action", () => {
		const correctAction = {
			type: REMOVE_COORDS,
		};
		expect(removeCoordsAction()).toEqual(correctAction);
	});
	it("clearAdressRoute returns correct action", () => {
		const correctAction = {
			type: MAKE_NEW_OFFER,
		};
		expect(clearAdressRoute()).toEqual(correctAction);
	});
	it("saveAllCoordsAction returns correct action", () => {
		const arrayOfCoords = [];

		const correctAction = { payload: { routes: arrayOfCoords }, type: SAVE_ALL_ROUTES };

		expect(saveAllCoordsAction(arrayOfCoords)).toEqual(correctAction);
	});
	it("saveChoosenCoordsAction returns correct action", () => {
		const routes = [];

		const correctAction = { payload: routes, type: SAVE_CHOOSEN_COORDS_ROUTES };

		expect(saveChoosenCoordsAction(routes)).toEqual(correctAction);
	});
});
