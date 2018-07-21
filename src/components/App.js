import React from 'react';
import {
	Springboard
} from './sections';
import {
	Background,
	Footer
} from './index';

import 'styles/1-layouts/app.css';

class App extends React.Component {

	render() {
		return (
			<main>
				<div className={"container-fluid section-container"}>
					<Background/>
					<Springboard/>
					<Springboard/>
					<Springboard/>
				</div>
				<Footer/>
			</main>
		)
	}
}

export default App;