import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const ProfileButton = ({ openFormCard }) => (
	<Button onClick={openFormCard} component={Link} to="/profile">
		Профиль
	</Button>
);
