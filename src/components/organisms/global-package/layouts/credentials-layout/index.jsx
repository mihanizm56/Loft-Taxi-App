import React, { Component } from "react";
import { CredentialsForm, CredentialsRedirectBox } from "../../../..";
import "./CredentialLayout.css";

const renderCredentialForm = props => <CredentialsForm {...props} />;

const renderRedirectBox = props => <CredentialsRedirectBox />;

export class CredentialLayout extends Component {
	componentDidMount() {}

	render() {
		const {
			shouldFormBeOpened,
			cardNameFormValue,
			expDateFormValue,
			cardNumberFormValue,
			cvvFormValue,
			...restProps
		} = this.props;

		return (
			<div className="credentials-layout-wrapper">
				<h1 className="layout__title credentials-title">Профиль</h1>
				{shouldFormBeOpened ? renderCredentialForm(restProps) : renderRedirectBox()}
			</div>
		);
	}
}
