import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'sanitize.css';
import './styles/0-base/common.css';

import { App, Whoops404 } from './components';
import { hashLinkScroll } from './utils/funcs';

const routes = (
	<Router onUpdate={hashLinkScroll}>
		<Switch>
			<Route path={"/"} exact component={App}/>
			<Route component={Whoops404}/>
		</Switch>
	</Router>
);

ReactDOM.render(routes, document.getElementById('root'));