import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction, logoutAction, getLoginState } from "../../../redux/modules/auth";
import { batchActions } from "redux-batched-actions";
import { clearCardDataAction } from "../../../redux/modules/credentials";
import { clearAdressRoute } from "../../../redux/modules/addresses";

class WrappedContainer extends Component {
	signInUser = ({ email, password }) => {
		if (email && password) {
			this.props.signIn(email, password);
		}
	};

	signOutUser = () => {
		this.props.signOut();
	};

	render() {
		const { children, signIn, signOut, ...restProps } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, { signInUser: this.signInUser, signOutUser: this.signOutUser, ...restProps })
		);
	}
}

const mapStateToProps = store => {
	return {
		loggedIn: getLoginState(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signIn(email, password) {
			dispatch(loginRequestAction(email, password));
		},
		signOut() {
			dispatch(batchActions([logoutAction(), clearCardDataAction(), clearAdressRoute()]));
		},
	};
};

export const AuthStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
