import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchAllAddressesAction, fetchCoordsAction } from "../middleware";
import { saveAllCoordsAction } from "../actions";
import { findAction, getAction } from "../../../../utils";
import { EMPTY_ARRAY } from "../../../../constants";

const mockStore = configureMockStore([thunk]);

describe("Adress middleware test", () => {
	it("fetches all routes when users data is correct", async () => {
		const store = mockStore();
		store.dispatch(fetchAllAddressesAction());

		expect(await getAction(store, "SAVE_ALL_ROUTES")).toEqual({
			type: "SAVE_ALL_ROUTES",
			payload: {
				routes: ["Пулково (LED)", "Шаверма на Невском", "Инфекционная больница им. Боткина", "Волковское кладбище"],
			},
		});
	});

	it("fetches coords to choosen routes", async () => {
		const store = mockStore();
		store.dispatch(fetchCoordsAction("Пулково (LED)", "Шаверма на Невском"));

		expect(await getAction(store, "SAVE_CHOOSEN_COORDS_ROUTES")).toEqual({
			type: "SAVE_CHOOSEN_COORDS_ROUTES",
			payload: [
				[30.272183, 59.80065],
				[30.27744, 59.799996],
				[30.282353, 59.796571],
				[30.300942, 59.793364],
				[30.318439, 59.790863],
				[30.323901, 59.79261],
				[30.322928, 59.809261],
				[30.291613, 59.82616],
				[30.283282, 59.832596],
				[30.275081, 59.833692],
				[30.27679, 59.832989],
				[30.279596, 59.834648],
				[30.290602, 59.852339],
				[30.293599, 59.8747],
				[30.298358, 59.875588],
				[30.302343, 59.887851],
				[30.299499, 59.898466],
				[30.300603, 59.909234],
				[30.320473, 59.909069],
				[30.342747, 59.917104],
				[30.339609, 59.919693],
				[30.350019, 59.922859],
				[30.355483, 59.93168],
				[30.348308, 59.932573],
			],
		});
	});
	it("fetches no coords to not choosen routes", async () => {
		const store = mockStore();
		store.dispatch(fetchCoordsAction());

		expect(await getAction(store, "SAVE_CHOOSEN_COORDS_ROUTES")).toEqual({
			type: "SAVE_CHOOSEN_COORDS_ROUTES",
			payload: EMPTY_ARRAY,
		});
	});
});
