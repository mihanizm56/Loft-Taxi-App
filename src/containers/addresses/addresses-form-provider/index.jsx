import React, { Component } from "react";
import { reduxForm } from "redux-form";

class WrappedContainer extends Component {
	render() {
		const { children } = this.props;

		return React.Children.map(children, child => React.cloneElement(child, { ...this.props }));
	}
}

export const AddressesFormProvider = reduxForm({
	form: "addresses",
})(WrappedContainer);
