import { saveAllCoordsAction, saveChoosenCoordsAction } from "./actions";
import { EMPTY_ARRAY } from "../../../constants";
import { fetchAddressesRequest, fetchRouteRequest } from "../../../services";

export const fetchAllAddressesAction = () => {
	return dispatch => {
		fetchAddressesRequest()
			.then(({ addresses }) => {
				if (addresses && addresses.length) {
					dispatch(saveAllCoordsAction(addresses));
				}
			})
			.catch(error => dispatch(saveAllCoordsAction(EMPTY_ARRAY)));
	};
};

export const fetchCoordsAction = (placeFrom, placeTo) => {
	return dispatch => {
		fetchRouteRequest(placeFrom, placeTo).then(coords => {
			if (coords && coords.length) {
				dispatch(saveChoosenCoordsAction(coords));
			} else {
				dispatch(saveChoosenCoordsAction(EMPTY_ARRAY));
			}
		});
	};
};
