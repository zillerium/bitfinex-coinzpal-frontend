import React from 'react';

import 'styles/3-modules/arrow.css';

class Arrow extends React.Component {

	render() {
		return (
			<div className={"row arrow-container"}>
				<a href={this.props.redirectTo ? ("#" + this.props.redirectTo) : "#"}><img src={require("assets/icons/ArrowDown.png")} alt={"arrow"}/></a>
			</div>
		)
	}
}

export default Arrow