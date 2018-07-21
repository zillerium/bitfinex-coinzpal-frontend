/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as fa from 'react-icons/lib/fa'

class FormItem extends Component {

	static propTypes = {
		type: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		autocomplete: PropTypes.string,
		validate: PropTypes.string,
		required: PropTypes.bool,
		onChange: PropTypes.func
	}

	constructor(props) {
		super(props)

		this.state = {}
		this.renderIcon = this.renderIcon.bind(this)
	}

	renderIcon() {
		const iconSize = 20

		switch (this.props.name) {
		case 'fname':
			return <fa.FaUser size={iconSize}/>
		case 'lname':
			return <fa.FaUser size={iconSize}/>
		case 'email':
			return <fa.FaEnvelope size={iconSize}/>
		case 'password':
			return <fa.FaLock size={iconSize}/>
		case 'phone':
			return <fa.FaMobile size={iconSize}/>
		case 'twofa':
			return <fa.FaMobile size={iconSize}/>
		case 'address_line_1':
			return <fa.FaBuilding size={iconSize}/>
		case 'address_line_2':
			return <fa.FaBuilding size={iconSize}/>
		default:
			return <fa.FaEnvelope size={iconSize}/>
		}
	}

	render() {
		return (
			<div className={'form-item validate-input'} data-validate={this.props.validate ? this.props.validate : ''}> {/* 'Valid email is required: ex@abc.xyz'*/}
				<input className={'input-item'}
					type={this.props.type}
					name={this.props.name}
					placeholder={this.props.placeholder}
					autoComplete={this.props.autocomplete}
					required={this.props.required ? this.props.required : false}
					onChange={this.props.onChange ? this.props.onChange : null}/>
				<span className={'focus-input'}/>
				<span className={'symbol-input'}>
					{this.renderIcon()}
				</span>
			</div>
		)
	}
}

export default FormItem