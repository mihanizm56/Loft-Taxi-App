import React from "react";
import { OfferCreateBox, AddressForm, RedirectToCredentialsBox, MapBox } from "../../../../molecules";
import { nullFunc } from "../../../../../utils";
import "./AddressLayout.css";

export const AddressLayout = ({
	openFormCard,
	offerDoneStatus,
	createNewOffer,
	isValidFormData,
	arrayOfCoords,
	reset,
	...restProps
}) => {
	return (
		<>
			<MapBox arrayOfCoords={arrayOfCoords} />
			<div className="address-layout-wrapper">
				{!isValidFormData && <RedirectToCredentialsBox openFormCard={openFormCard} />}
				{isValidFormData && !offerDoneStatus && <AddressForm {...restProps} reset={reset} />}
				{isValidFormData && offerDoneStatus && <OfferCreateBox createNewOffer={createNewOffer} reset={reset} />}
			</div>
		</>
	);
};

AddressLayout.defaultProps = {
	createNewOffer: () => nullFunc,
};
