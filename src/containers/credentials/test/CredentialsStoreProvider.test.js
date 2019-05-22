import React from "react";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { CredentialsStoreProvider, mapDispatchToProps } from "../credentials-store-provider";
import * as actions from "../../../redux/modules/credentials/actions";
import { nullFunc } from "../../../utils";

jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
	Map: () => ({}),
}));

describe("CredentialsStoreProvider", () => {
	const MockComponent = props => <div>test</div>;
	const mockStore = configureMockStore();
	const initialState = {
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
	let store;
	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
				<CredentialsStoreProvider>
					<MockComponent />
				</CredentialsStoreProvider>
			</Provider>
		);
	});

	describe("check setting props", () => {
		it("should set component", () => {
			expect(wrapper.find(MockComponent).length).toBe(1);
		});
		it("should set cardName", () => {
			expect(wrapper.find(MockComponent).prop("cardName")).toEqual(initialState.сredentialsStorage.card.cardName);
		});
		it("should set cardNumber", () => {
			expect(wrapper.find(MockComponent).prop("cardNumber")).toEqual(initialState.сredentialsStorage.card.cardNumber);
		});
		it("should set cvv", () => {
			expect(wrapper.find(MockComponent).prop("cvv")).toEqual(initialState.сredentialsStorage.card.cvv);
		});
		it("should set expDate", () => {
			expect(wrapper.find(MockComponent).prop("expDate")).toEqual(initialState.сredentialsStorage.card.expDate);
		});
		it("should set shouldFormBeOpened", () => {
			expect(wrapper.find(MockComponent).prop("shouldFormBeOpened")).toEqual(
				initialState.сredentialsStorage.shouldFormBeOpened
			);
		});
		it("should set saveUserCard", () => {
			expect(wrapper.find(MockComponent).prop("saveUserCard")).toBeInstanceOf(Function);
		});
		it("should set openFormCard", () => {
			expect(wrapper.find(MockComponent).prop("openFormCard")).toBeInstanceOf(Function);
		});
		it("should set closeFormCard", () => {
			expect(wrapper.find(MockComponent).prop("closeFormCard")).toBeInstanceOf(Function);
		});
	});

	describe("functionality of mapDispatchToProps", () => {
		it("saveUserCard works", () => {
			const saveDataOfCardMock = jest.spyOn(actions, "saveDataOfCardAction");
			const closeFormCardMock = jest.spyOn(actions, "closeFormCardAction");

			wrapper
				.find("WrappedContainer")
				.instance()
				.saveUserCard({
					cardName: "cardNameTest",
					expDate: "expDateTest",
					cardNumber: "cardNumberTest",
					cvv: "cvvTest",
				});

			expect(saveDataOfCardMock).toHaveBeenCalledWith("cardNameTest", "expDateTest", "cardNumberTest", "cvvTest");
			expect(closeFormCardMock).toHaveBeenCalled();
		});
		it("saveUserCard works", () => {
			const openFormCardMock = jest.spyOn(actions, "openFormCardAction");

			wrapper
				.find("WrappedContainer")
				.instance()
				.openFormCard();

			expect(openFormCardMock).toHaveBeenCalled();
		});
	});
});
