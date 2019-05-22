import { INPUT_DATA_OF_CARD, CLEAR_CARD_DATA, OPEN_CARD_FORM, CLOSE_CARD_FORM } from "./constants";
import lensPath from "ramda/src/lensPath";
import set from "ramda/src/set";

const initState = {
	card: {
		cardName: null,
		expDate: null,
		cardNumber: null,
		cvv: null,
	},
	shouldFormBeOpened: true,
};

const cardLens = lensPath(["card"]);
const stateOfFormLens = lensPath(["shouldFormBeOpened"]);

const сredentialsStorage = (state = initState, action) => {
	switch (action.type) {
		case INPUT_DATA_OF_CARD:
			return set(cardLens, action.payload, state);

		case CLEAR_CARD_DATA:
			return set(cardLens, initState.card, state);

		case OPEN_CARD_FORM:
			return set(stateOfFormLens, true, state);

		case CLOSE_CARD_FORM:
			return set(stateOfFormLens, false, state);

		default:
			return state;
	}
};

export default сredentialsStorage;
