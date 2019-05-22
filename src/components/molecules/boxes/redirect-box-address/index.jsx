import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./RedirectToCredentialsBox.css";

export const RedirectToCredentialsBox = ({ openFormCard }) => {
	return (
		<>
			<h1 className="layout__title offer-title">Заполните платежные данные</h1>
			<p className="offer-redirect-box__subtitle">Укажите информацию о банковской карте, чтобы сделать заказ.</p>
			<div className="offer-form__button">
				<Button onClick={openFormCard} component={Link} to="/profile" color="primary" variant="outlined">
					Перейти в профиль
				</Button>
			</div>
		</>
	);
};
