import { saveDataOfCardAction, openFormCardAction, closeFormCardAction, clearCardDataAction } from "../actions";
import { INPUT_DATA_OF_CARD, CLEAR_CARD_DATA, OPEN_CARD_FORM, CLOSE_CARD_FORM } from "../constants";

describe("Credentials redux-module actions test", () => {
	it("saveDataOfCardAction returns correct action", () => {
		const testData = ["cardNameTest", "expDateTest", "cardNumberTest", "cvvTest"];

		const correctAction = {
			type: INPUT_DATA_OF_CARD,
			payload: {
				cardName: testData[0],
				expDate: testData[1],
				cardNumber: testData[2],
				cvv: testData[3],
			},
		};

		expect(saveDataOfCardAction(...testData)).toEqual(correctAction);
	});
	it("openFormCardAction returns correct action", () => {
		const correctAction = {
			type: OPEN_CARD_FORM,
		};
		expect(openFormCardAction()).toEqual(correctAction);
	});
	it("closeFormCardAction returns correct action", () => {
		const correctAction = {
			type: CLOSE_CARD_FORM,
		};
		expect(closeFormCardAction()).toEqual(correctAction);
	});
	it("clearCardDataAction returns correct action", () => {
		const correctAction = {
			type: CLEAR_CARD_DATA,
		};
		expect(clearCardDataAction()).toEqual(correctAction);
	});
});
