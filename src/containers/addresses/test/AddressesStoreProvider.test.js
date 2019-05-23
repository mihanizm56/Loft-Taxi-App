import React from "react";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { AddressesStoreProvider, mapDispatchToProps } from "../addresses-store-provider";
import * as middleware from "../../../redux/modules/addresses/sagas";
import * as actions from "../../../redux/modules/addresses/actions";
import { nullFunc } from "../../../utils";

jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
	Map: () => ({}),
}));

describe("AddressesStoreProvider", () => {
	const MockComponent = props => <div>test</div>;

	const mockStore = configureMockStore([thunk]);
	const initialState = { routeMapStorage: { allRoutes: [], offerDone: false, choosenRouteCoords: [] } };
	let store;
	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
				<AddressesStoreProvider>
					<MockComponent />
				</AddressesStoreProvider>
			</Provider>
		);
	});

	describe("check setting props", () => {
		it("should set component", () => {
			expect(wrapper.find(MockComponent).length).toBe(1);
		});
		it("should set allRoutes", () => {
			expect(wrapper.find(MockComponent).prop("allRoutes")).toEqual(initialState.routeMapStorage.allRoutes);
		});
		it("should set offerDone", () => {
			expect(wrapper.find(MockComponent).prop("offerDoneStatus")).toEqual(initialState.routeMapStorage.offerDone);
		});
		it("should set choosenRouteCoords", () => {
			expect(wrapper.find(MockComponent).prop("arrayOfCoords")).toEqual(
				initialState.routeMapStorage.choosenRouteCoords
			);
		});
		it("should set chooseTripRoute", () => {
			expect(wrapper.find(MockComponent).prop("chooseTripRoute")).toBeInstanceOf(Function);
		});

		it("should set createNewOffer", () => {
			expect(wrapper.find(MockComponent).prop("createNewOffer")).toBeInstanceOf(Function);
		});
	});

	describe("functionality of mapDispatchToProps", () => {
		// it("fetchAllAddresses test when component did mount", () => {
		// 	const fetchAllAddressesMock = jest.spyOn(middleware, "fetchAllAddressesAction");
		// 	wrapper
		// 		.find("WrappedContainer")
		// 		.instance()
		// 		.componentDidMount();

		// 	expect(fetchAllAddressesMock).toHaveBeenCalled();
		// });
		// it("chooseTripRoute test in component", () => {
		// 	const fetchCoordsActionMock = jest.spyOn(middleware, "fetchCoordsAction");
		// 	wrapper
		// 		.find("WrappedContainer")
		// 		.instance()
		// 		.chooseTripRoute({ from: "place A", to: "place B" });

		// 	expect(fetchCoordsActionMock).toHaveBeenCalled();
		// });
		it("clearAddress test in component", () => {
			const clearAddressMock = jest.spyOn(actions, "clearAdressRoute");
			wrapper
				.find("WrappedContainer")
				.instance()
				.createNewOffer();

			expect(clearAddressMock).toHaveBeenCalled();
		});
	});
});
