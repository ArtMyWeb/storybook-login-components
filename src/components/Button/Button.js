import React from "react";
import PropTypes from "prop-types";
import MuiButton from "@mui/material/Button";

const Button = React.forwardRef((props, ref) => {
	const { children, ...rest } = props;
	return (
		<MuiButton {...rest} ref={ref}>
			{children}
		</MuiButton>
	);
});

Button.propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"]),
	variant: PropTypes.oneOf(["contained", "outlined", "text"]),
	color: PropTypes.oneOf([
		"inherit",
		"primary",
		"secondary",
		"error",
		"info",
		"warning",
		"success",
	]),
};

Button.defaultProps = {
	color: "primary",
	variant: "text",
	size: "small",
};

export default Button;
