import { createSelector } from "reselect";

const allRoutesState = state => state.routeMapStorage.allRoutes;
const offerDoneState = state => state.routeMapStorage.offerDone;
const choosenCoords = state => state.routeMapStorage.choosenRouteCoords;

export const getChoosenCoords = createSelector(
	[choosenCoords],
	coords => coords
);

export const getAllRoutesState = createSelector(
	[allRoutesState],
	routes => routes
);

export const getOfferDoneState = createSelector(
	[offerDoneState],
	offerState => offerState
);
