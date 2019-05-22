import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginStorage from "../modules/auth";
import сredentialsStorage from "../modules/credentials";
import routeMapStorage from "../modules/addresses";

export const rootReducer = combineReducers({
	form: formReducer,
	loginStorage,
	сredentialsStorage,
	routeMapStorage,
});
