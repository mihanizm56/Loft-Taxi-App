import {
	getCardNameState,
	getExpDateState,
	getCardNumberState,
	getCvvState,
	getValidFormData,
	getShouldFormBeOpened,
} from "../selectors";
import { EMPTY_ARRAY } from "../../../../constants";

describe("Credentials Selectors", () => {
	const mockParameters = {
		сredentialsStorage: {
			card: {
				cardName: null,
				expDate: null,
				cardNumber: null,
				cvv: null,
			},
			shouldFormBeOpened: true,
		},
	};

	it("returns cards user name", () => {
		const selected = getCardNameState.resultFunc(mockParameters.сredentialsStorage.card.cardName);
		expect(selected).toEqual(mockParameters.сredentialsStorage.card.cardName);
	});
	it("returns exp date of card", () => {
		const selected = getExpDateState.resultFunc(mockParameters.сredentialsStorage.card.expDate);
		expect(selected).toEqual(mockParameters.сredentialsStorage.card.expDate);
	});
	it("returns card number", () => {
		const selected = getCardNumberState.resultFunc(mockParameters.сredentialsStorage.card.cardNumber);
		expect(selected).toEqual(mockParameters.сredentialsStorage.card.cardNumber);
	});
	it("returns cards cvv", () => {
		const selected = getCvvState.resultFunc(mockParameters.сredentialsStorage.card.cvv);
		expect(selected).toEqual(mockParameters.сredentialsStorage.card.cvv);
	});
	it("returns id the data of card is valid or not", () => {
		const selected = getValidFormData.resultFunc(
			mockParameters.сredentialsStorage.card.cardName,
			mockParameters.сredentialsStorage.card.expDate,
			mockParameters.сredentialsStorage.card.cardNumber,
			mockParameters.сredentialsStorage.card.cvv
		);
		expect(selected).toEqual(false);
	});
	it("returns if the modal is opened", () => {
		const shouldFormBeOpenedTest = mockParameters.сredentialsStorage.shouldFormBeOpened;

		const selected = getShouldFormBeOpened.resultFunc(shouldFormBeOpenedTest);
		expect(selected).toEqual(shouldFormBeOpenedTest);
	});
});
