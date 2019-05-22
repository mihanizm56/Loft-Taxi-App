import React from "react";
import Button from "@material-ui/core/Button";

export const UserButton = ({ loggedIn, signInUser, signOutUser }) => {
	return loggedIn ? (
		<Button color="primary" onClick={signOutUser}>
			Выйти
		</Button>
	) : (
		<Button color="primary">Войти</Button>
	);
};
