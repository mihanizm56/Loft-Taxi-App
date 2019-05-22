import { getChoosenCoords, getAllRoutesState, getOfferDoneState } from "../selectors";
import { EMPTY_ARRAY } from "../../../../constants";

describe("Address Selectors", () => {
	const mockParameters = {
		routeMapStorage: {
			allRoutes: EMPTY_ARRAY,
			offerDone: false,
			choosenRouteCoords: EMPTY_ARRAY,
		},
	};

	it("returns choosen coords", () => {
		const selected = getChoosenCoords.resultFunc(mockParameters.routeMapStorage.choosenRouteCoords);
		expect(selected).toEqual(mockParameters.routeMapStorage.choosenRouteCoords);
	});
	it("returns all coords", () => {
		const selected = getAllRoutesState.resultFunc(mockParameters.routeMapStorage.allRoutes);
		expect(selected).toEqual(mockParameters.routeMapStorage.allRoutes);
	});
	it("returns state of offer", () => {
		const selected = getOfferDoneState.resultFunc(mockParameters.routeMapStorage.offerDone);
		expect(selected).toEqual(mockParameters.routeMapStorage.offerDone);
	});
});
