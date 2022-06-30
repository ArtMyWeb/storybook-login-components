import React from "react";
import PropTypes from "prop-types";
import MuiTextFieldn from "@mui/material/TextField";

const TextField = (props) => <MuiTextFieldn {...props} />;

TextField.propTypes = {
	variant: PropTypes.oneOf(["standard", "outlined", "filled"]),
	size: PropTypes.oneOf(["small", "medium"]),
	error: PropTypes.bool,
	helperText: PropTypes.string,
	required: PropTypes.bool,
	fullWidth: PropTypes.bool,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
	label: PropTypes.string,
};

TextField.defaultProps = {
	variant: "filled",
	size: "medium",
	error: false,
	helperText: "error",
	required: false,
	fullWidth: false,
	placeholder: "placeholder",
	label: "Required",
	disabled: false,
};

export default TextField;
