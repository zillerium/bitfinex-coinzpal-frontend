import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import palette from 'styles/palette';

const ActionButton = ({text, loading}) => (
	<div className={"wrap-form-btn-container"}>
		<button className={"wrap-form-btn"} style={{ background: loading ? palette.complementary : palette.main }}>
			{loading ? <Spinner name={"circle"} color={"white"} size={32} fadeIn={"none"} /> : text}
		</button>
	</div>
);
ActionButton.propTypes = {
	text: PropTypes.string.isRequired,
	loading: PropTypes.bool
};

export default ActionButton;