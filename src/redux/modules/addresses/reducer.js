import { SAVE_ALL_ROUTES, MAKE_NEW_OFFER, SAVE_CHOOSEN_COORDS_ROUTES } from "./constants";
import { EMPTY_ARRAY } from "../../../constants";
import lensPath from "ramda/src/lensPath";
import set from "ramda/src/set";

const initialState = {
	allRoutes: EMPTY_ARRAY,
	offerDone: false,
	choosenRouteCoords: EMPTY_ARRAY,
};

const allRoutesLens = lensPath(["allRoutes"]);

const routeMapStorage = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_ALL_ROUTES:
			return set(allRoutesLens, action.payload.routes, state);

		case SAVE_CHOOSEN_COORDS_ROUTES:
			return { ...state, choosenRouteCoords: action.payload, offerDone: true };

		case MAKE_NEW_OFFER:
			return { ...state, choosenRouteCoords: EMPTY_ARRAY, offerDone: false };

		default:
			return state;
	}
};

export default routeMapStorage;
