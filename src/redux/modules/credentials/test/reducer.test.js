import сredentialsStorage from "../reducer";
import { INPUT_DATA_OF_CARD, CLEAR_CARD_DATA, OPEN_CARD_FORM, CLOSE_CARD_FORM } from "../constants";
import { saveDataOfCardAction, openFormCardAction, closeFormCardAction, clearCardDataAction } from "../actions";

const initialState = {
	card: {
		cardName: null,
		expDate: null,
		cardNumber: null,
		cvv: null,
	},
	shouldFormBeOpened: true,
};

const payloadOfCard = {
	cardName: "cardNameTest",
	expDate: "expDateTest",
	cardNumber: "cardNumberTest",
	cvv: "cvvTest",
};

describe("INPUT_DATA_OF_CARD action", () => {
	const state0 = сredentialsStorage(undefined, "test");
	const state1 = сredentialsStorage(
		state0,
		saveDataOfCardAction(payloadOfCard.cardName, payloadOfCard.expDate, payloadOfCard.cardNumber, payloadOfCard.cvv)
	);

	it("get card data in state1", () => {
		expect(state1.card).toEqual(payloadOfCard);
	});
});

describe("CLEAR_CARD_DATA action", () => {
	const state0 = сredentialsStorage(undefined, "test");
	const state1 = сredentialsStorage(state0, clearCardDataAction());

	it("get card data in state1", () => {
		expect(state1.card).toEqual(initialState.card);
	});
});

describe("OPEN_CARD_FORM action", () => {
	const state0 = сredentialsStorage(undefined, "test");
	const state1 = сredentialsStorage(state0, openFormCardAction());
	const testShouldFormBeOpenedParameter = true;

	it("get card data in state1", () => {
		expect(state1.shouldFormBeOpened).toEqual(testShouldFormBeOpenedParameter);
	});
});

describe("CLOSE_CARD_FORM action", () => {
	const state0 = сredentialsStorage(undefined, "test");
	const state1 = сredentialsStorage(state0, closeFormCardAction());
	const testShouldFormBeOpenedParameter = false;

	it("get card data in state1", () => {
		expect(state1.shouldFormBeOpened).toEqual(testShouldFormBeOpenedParameter);
	});
});
