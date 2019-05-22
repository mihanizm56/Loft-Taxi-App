import React from "react";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

export const renderMaskedInput = ({ value, input, label, meta: { touched, invalid, error }, ...custom }) => (
	<InputMask mask="9999 9999 9999 9999" {...input} maskChar=" ">
		{() => (
			<TextField
				fullWidth={true}
				label={label}
				placeholder={label}
				error={touched && invalid}
				helperText={touched && error}
			/>
		)}
	</InputMask>
);
