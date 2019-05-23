const urlPath = process.env.NODE_ENV === "development" ? "http://localhost:10000/" : "have no production url";

export const get = ({ endpoint }) => fetch(endpoint);

export const post = ({ endpoint, data }) => {
	const paramsObject = {
		method: "post",
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		},
		cors: "no-cors",
		body: JSON.stringify(data),
	};

	const resultUrl = urlPath + endpoint;

	return fetch(resultUrl, paramsObject);
};

// export const put = ({endpoint,data}) => {
// 	const paramsObject = {
// 		method: "put",
// 		headers: {
// 			Accept: "application/json, text/plain, */*",
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	};

// 	const resultUrl = urlPath + endpoint;

// 	return fetch(resultUrl, paramsObject);
// };

// export const patch = ({endpoint,data}) => {
// 	const paramsObject = {
// 		method: "patch",
// 		headers: {
// 			Accept: "application/json, text/plain, */*",
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	};

// 	const resultUrl = urlPath + endpoint;

// 	return fetch(resultUrl, paramsObject);
// };

// export const delete = ({endpoint,data}) => {
// 	const paramsObject = {
// 		method: "delete",
// 		headers: {
// 			Accept: "application/json, text/plain, */*",
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	};

// 	const resultUrl = urlPath + endpoint;

// 	return fetch(resultUrl, paramsObject);
// };
