import { Component} from 'react'
import update from 'immutability-helper'

class Onboarding extends Component {

	constructor(props) {
		super(props)

		// Catching any potential alert message
		const { location, alertError, alertSuccess } = this.props
		if (location && location.state && location.state.alert && alert) {
			const alert = location.state.alert

			if (alert.success) {
				alertSuccess(alert.message)
			} else if (alert.error) {
				alertError(alert.message)
			}
		}

		this.onChange = this.onChange.bind(this)
		this.onCaptchaSubmit = this.onCaptchaSubmit.bind(this)
		this.onCaptchaExpired = this.onCaptchaExpired.bind(this)
	}

	onChange(e) {
		this.setState(update(this.state, {
			[e.target.name]: {$set: e.target.value}
		}))
	}

	onCaptchaSubmit(response) {
		console.log('onCaptchaSubmit: ', response)
		if (response) {
			this.setState(update(this.state, {
				recaptcha: {
					required: {$set: true},
					token: {$set: response}
				}
			}))
		}
	}

	onCaptchaExpired(response) {
		console.log('onCaptchaExpired: ', response)
		this.setState(update(this.state, {
			recaptcha: {$set: {}}
		}))
	}
}

export default Onboarding
