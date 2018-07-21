import React from 'react';

import 'styles/3-modules/logo.css';

class Logo extends React.Component {

	render() {
		const props = this.props;
		return (
			<a className={"logo-container" + (props.className ? (" " + props.className) : "")}>
				<img src={require("assets/icons/LogoIcon.png")} alt={"logo"}/>
				<span>Chronos</span>
			</a>
		)
	}
}

export default Logo;