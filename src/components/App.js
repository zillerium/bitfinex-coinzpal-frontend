import React from 'react';
import {
	Redeem,
	SignUp
} from './sections';

import 'styles/1-layouts/app.css';

class App extends React.Component {

	render() {
		const props = this.props;
		return (
			<main>
				<div className={"container-fluid section-container"}>
					{props.location.pathname === "/" ? <SignUp/> : <Redeem/>}
				</div>
			</main>
		)
	}
}

export default App;