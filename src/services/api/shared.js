import { get } from "./rest";

const appLoginValues = {
	email: "test@test.com",
	password: "123123",
}; ///TODO MAKE OWN REST API

export const sleep = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			res(data);
		}, ms)
	);
};

export const fetchLoginRequest = (email, password) => {
	return get({ endpoint: `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}` }).then(data =>
		data.json()
	);
};

export const fetchAddressesRequest = () => {
	return get({ endpoint: "https://loft-taxi.glitch.me/addressList" }).then(data => data.json());
};

export const fetchRouteRequest = (routeFrom, routeTo) => {
	return get({
		endpoint: `https://loft-taxi.glitch.me/route?address1=${encodeURIComponent(
			routeFrom
		)}&address2=${encodeURIComponent(routeTo)}`,
	}).then(data => data.json());
};

export const fetchLoginAndPassword = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			res(appLoginValues);
		}, 100)
	);
};
