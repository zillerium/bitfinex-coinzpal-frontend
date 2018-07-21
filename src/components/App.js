import React from 'react';
import {
	Faq,
	Springboard
} from './sections';
import {
	Footer
} from './index';

import 'styles/1-layouts/app.css';

class App extends React.Component {

	render() {
		return (
			<main>
				<div className={"container-fluid section-container"}>
					<Springboard/>
					<Faq/>
					<Faq/>
				</div>
				<Footer/>
			</main>
		)
	}
}

export default App;