import React, { Component } from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";

const getFromValue = formValueSelector("addresses"); //////TODO Вынести в отдельный селектор
const getToValue = formValueSelector("addresses"); //////TODO Вынести в отдельный селектор

class WrappedContainer extends Component {
	render() {
		const { children, ...restProps } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				...restProps,
			})
		);
	}
}

const mapStateToProps = store => {
	return {
		fromValue: getFromValue(store, "from"),
		toValue: getToValue(store, "to"),
	};
};

export const AddressesFormValuesProvider = connect(
	mapStateToProps,
	null
)(WrappedContainer);
