import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { asyncValidateForCredentials } from "../../../services/validation";

class WrappedContainer extends Component {
	render() {
		const { children } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				...this.props,
			})
		);
	}
}

export const CredentialsFormProvider = reduxForm({
	asyncValidate: asyncValidateForCredentials,
	asyncBlurFields: ["cvv", "cardNumber", "cardName", "expDate"],
	form: "credentials",
})(WrappedContainer);
