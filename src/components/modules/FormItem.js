/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as fa from 'react-icons/lib/fa'

import 'styles/3-modules/form-item.css';

class FormItem extends Component {

	static propTypes = {
		type: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		autocomplete: PropTypes.string,
		validate: PropTypes.string,
		required: PropTypes.bool,
		onChange: PropTypes.func
	};

	constructor(props) {
		super(props);

		this.state = {};
		this.renderIcon = this.renderIcon.bind(this);
	}

	renderIcon() {
		const iconSize = 20;

		switch (this.props.name) {
		case "name":
			return <fa.FaUser size={iconSize}/>;
		case "your-email":
			return <fa.FaEnvelope size={iconSize}/>;
		case "friend-email":
			return <fa.FaEnvelope size={iconSize}/>;
		case "amount":
			return <fa.FaDatabase size={iconSize}/>;
		default:
			return <fa.FaEnvelope size={iconSize}/>;
		}
	}

	render() {
		return (
			<div className={"form-item validate-input"} data-validate={this.props.validate ? this.props.validate : ""}> {/* 'Valid email is required: ex@abc.xyz'*/}
				<input className={"input-item"}
					type={this.props.type}
					name={this.props.name}
					placeholder={this.props.placeholder}
					autoComplete={this.props.autocomplete}
					required={this.props.required ? this.props.required : false}
					onChange={this.props.onChange ? this.props.onChange : null}/>
				<span className={"focus-input"}/>
				<span className={"symbol-input"}>
					{this.renderIcon()}
				</span>
			</div>
		)
	}
}

export default FormItem;