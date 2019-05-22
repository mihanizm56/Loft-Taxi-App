import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const CredentialsRedirectBox = () => {
	return (
		<>
			<h6 className="form-subtitle">Платёжные данные обновлены. Теперь вы можете заказывать такси.</h6>
			<div className="credentials-form__button">
				<Button component={Link} to="/map" color="primary" variant="outlined">
					Перейти на карту
				</Button>
			</div>
		</>
	);
};
