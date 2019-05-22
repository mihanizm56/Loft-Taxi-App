import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { UserButton, ProfileButton } from "../../..";
import { AuthStoreProvider, CredentialsStoreProvider, AddressesStoreProvider } from "../../../../containers";
import "./Header.css";

export const Header = ({ openFormCard }) => {
	return (
		<div className="header-wrapper">
			<h2 className="header__title">Loft-Taxi</h2>
			<div className="header-button-box">
				<Button component={Link} to="/map">
					Карта
				</Button>
				<CredentialsStoreProvider>
					<ProfileButton />
				</CredentialsStoreProvider>
				<AddressesStoreProvider>
					<AuthStoreProvider>
						<UserButton />
					</AuthStoreProvider>
				</AddressesStoreProvider>
			</div>
		</div>
	);
};
