import React, { Component } from "react";
import { connect } from "react-redux";
import {
	saveDataOfCardAction,
	openFormCardAction,
	closeFormCardAction,
	getCardNameState,
	getExpDateState,
	getCardNumberState,
	getCvvState,
	getShouldFormBeOpened,
	getValidFormData,
} from "../../../redux/modules/credentials";

class WrappedContainer extends Component {
	saveUserCard = ({ cardName, expDate, cardNumber, cvv }) => {
		const { saveCardData, closeFormCard } = this.props;

		saveCardData(cardName, expDate, cardNumber, cvv);
		closeFormCard();
	};

	openFormCard = () => {
		this.props.openFormCard();
	};

	render() {
		const { children, saveCardData, cardName, expDate, cardNumber, cvv, ...restProps } = this.props;
		const credentialsValues = {
			cardName,
			expDate,
			cardNumber,
			cvv,
		};

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				openFormCard: this.openFormCard,
				saveUserCard: this.saveUserCard,
				...credentialsValues,
				...restProps,
			})
		);
	}
}

const mapStateToProps = store => {
	return {
		cardName: getCardNameState(store),
		expDate: getExpDateState(store),
		cardNumber: getCardNumberState(store),
		cvv: getCvvState(store),
		shouldFormBeOpened: getShouldFormBeOpened(store),
		isValidFormData: getValidFormData(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		saveCardData(cardName, expDate, cardNumber, cvv) {
			dispatch(saveDataOfCardAction(cardName, expDate, cardNumber, cvv));
		},
		openFormCard() {
			dispatch(openFormCardAction());
		},
		closeFormCard() {
			dispatch(closeFormCardAction());
		},
	};
};

export const CredentialsStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
