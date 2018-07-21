/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React  from 'react'
import { Footer } from 'components';
import { ActionButton, FormItem } from 'components/modules'
import update from 'immutability-helper'

import 'styles/2-sections/springboard.css';

class Springboard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: "",
			emails: {
				from: "",
				to: ""
			},
			amount: "",
			alert: "",
			networking: false
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState(update(this.state, {
			[e.target.name]: {$set: e.target.value}
		}))
	}

	onSubmit(e) {
		e.preventDefault();

		if (!this.checkbox.checked) {
			this.setState(update(this.state, {
				alert: ""
			}));
			return;
		}

		this.setState(update(this.state, {
			networking: true
		}));
		console.log(this.state);
	}

	onClearAlert(e) {
		e.preventDefault();
		this.setState(update(this.state, {
			alert: ""
		}));
	}

	render() {
		const { user } = this.props;

		return (
			<div className={"signup container-onboarding"}>
				{/*<img src={require("assets/Logo-Green-Inside.png")} alt={"Logo"}/>*/}
				<div className={"wrap-onboarding"}>
					<form className={"wrap-form validate-form"} onSubmit={this.onSubmit}>
						<h1 className={"wrap-form-title"}>
							{"Send EOS and EOS tokens"}
						</h1>
						<FormItem
							key={1}
							type={"text"}
							name={"name"}
							placeholder={"Name"}
							autocomplete={"name"}
							validate={"name"}
							required={true}
							onChange={this.onChange}
						/>
						<FormItem
							key={2}
							type={"email"}
							name={"your-email"}
							placeholder={"Your Email"}
							autocomplete={"email"}
							validate={"email"}
							required={true}
							onChange={this.onChange}
						/>
						<FormItem
							key={3}
							type={"email"}
							name={"friend-email"}
							placeholder={"Friend's Email"}
							autocomplete={""}
							validate={"email"}
							required={true}
							onChange={this.onChange}
						/>
						<FormItem
							key={4}
							type={"text"}
							name={"amount"}
							placeholder={"Amount"}
							autocomplete={""}
							validate={"text"}
							required={true}
							onChange={this.onChange}
						/>
						<label className={"form-check-container form-item txt2"}>
							<input name={"user-agreement"}
							       type={"checkbox"}
							       ref={(input) => {this.checkbox = input}}
							/>
							{"I agree to pay the 0.1% fee (up to a maximum of $1) for the CoinzPal service"}
						</label>
						<ActionButton
							text={"Sign & Submit"}
							loading={this.state.networking}
						/>
					</form>
				</div>
			</div>
		)
	}
}

export default Springboard;