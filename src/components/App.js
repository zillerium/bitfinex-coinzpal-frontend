import React from 'react';
import {
	Redeem,
	Springboard
} from './sections';

import Faq from 'components/sections/Springboard/Faq';

import 'styles/1-layouts/app.css';

class App extends React.Component {

	render() {
		const props = this.props;
		return (
			<main>
				<div className={"container-fluid section-container"}>
					{props.location.pathname === "/" ? <Springboard/> : <Redeem/>}
				</div>
			</main>
		)
	}
}

export default App;