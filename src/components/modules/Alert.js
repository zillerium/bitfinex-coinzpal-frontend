import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { alertActions } from 'actions'
import { assets, utils } from 'tsc'

class AlertContainer extends Component {

	static propTypes = {
		alert: PropTypes.object,
		clearAlert: PropTypes.func.isRequired
	}

	render() {
		if (utils.isEmpty(this.props.alert) || utils.isEmpty(this.props.alert.message)) {
			return null
		}

		return (
			<div className={'alert alert-danger alert-dismissible text-center txt2'} role={'alert'}>
				<span>{this.props.alert.message}</span>
				<button
					className={'close'}
					type={'button'}
					data-dismiss={'alert'}
					aria-label={assets.locales.common.close}
					onClick={this.props.clearAlert}>
					<span aria-hidden={true}>&times;</span>
				</button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { alert } = state
	return {
		alert
	}
}

const mapDispatchToProps = dispatch => ({
	clearAlert: () => {
		dispatch(alertActions.clear())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AlertContainer)