import { call, put } from "redux-saga/effects";
import { loginSuccessAction, loginFailedAction } from "./actions";
import { fetchLoginRequest } from "../../../services";
import { saveAllCoordsAction, saveChoosenCoordsAction } from "./actions";
import { EMPTY_ARRAY } from "../../../constants";
import { fetchAddressesRequest, fetchRouteRequest } from "../../../services";

export function* allAddressesFetchSaga() {
	console.log("test allAddressesFetchSaga");
	const resultOfRequest = yield call(fetchAddressesRequest);
	const { addresses } = resultOfRequest;
	try {
		if (addresses && addresses.length) {
			yield put(saveAllCoordsAction(addresses));
		} else {
			yield put(saveAllCoordsAction(EMPTY_ARRAY));
		}
	} catch (error) {
		yield put(saveAllCoordsAction(EMPTY_ARRAY)) || alert(error);
	}
}

export function* fetchCoordsSaga(action) {
	console.log("test fetchCoordsSaga");
	const { placeFrom, placeTo } = action.payload;
	if (placeFrom && placeTo) {
		const coords = yield call(fetchRouteRequest, placeFrom, placeTo);

		try {
			if (coords) {
				yield put(saveChoosenCoordsAction(coords));
			} else {
				yield put(saveChoosenCoordsAction(EMPTY_ARRAY));
			}
		} catch (error) {
			yield put(saveChoosenCoordsAction(EMPTY_ARRAY)) || alert(error);
		}
	}
}
