import { getLoginState } from "../selectors";
import { EMPTY_ARRAY } from "../../../../constants";

describe("Auth Selectors", () => {
	const mockParameters = {
		loginStorage: {
			login: false,
		},
	};

	it("returns if the user is logined", () => {
		const selected = getLoginState.resultFunc(mockParameters.loginStorage.choosloginenRouteCoords);
		expect(selected).toEqual(mockParameters.loginStorage.choosloginenRouteCoords);
	});
});
