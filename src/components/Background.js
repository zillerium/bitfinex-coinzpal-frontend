import React from 'react';

import 'styles/1-layouts/background.css';

class Background extends React.Component {

	render() {
		return (
			<div className={"background"}>
				<img id={"gradient1"} className={"gradient"} src={require("assets/gradients/TopLeftGradient.png")} alt={"TopLeftGradient"}/>
				<img id={"gradient2"} className={"gradient"} src={require("assets/gradients/MiddleRightGradient.png")} alt={"MiddleRightGradient"}/>
				<img id={"gradient3"} className={"gradient"} src={require("assets/gradients/LowerLeftGradient.png")} alt={"LowerLeftGradient"}/>
			</div>
		)
	}
}

export default Background;