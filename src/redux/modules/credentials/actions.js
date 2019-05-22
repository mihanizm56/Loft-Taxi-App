import { INPUT_DATA_OF_CARD, CLEAR_CARD_DATA, OPEN_CARD_FORM, CLOSE_CARD_FORM } from "./constants";

export const saveDataOfCardAction = (cardName, expDate, cardNumber, cvv) => ({
	type: INPUT_DATA_OF_CARD,
	payload: {
		cardName,
		expDate,
		cardNumber,
		cvv,
	},
});

export const openFormCardAction = () => ({
	type: OPEN_CARD_FORM,
});

export const closeFormCardAction = () => ({
	type: CLOSE_CARD_FORM,
});

export const clearCardDataAction = () => ({
	type: CLEAR_CARD_DATA,
});
