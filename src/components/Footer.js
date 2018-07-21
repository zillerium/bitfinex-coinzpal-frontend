import React from 'react';
import Logo from 'components/modules/Logo';

import 'styles/1-layouts/footer.css';

class Footer extends React.Component {

	render() {
		return (
			<footer className={"container-fluid"}>
				<div className={"row links-container"}>
					<div className={"col-lg-2"}>
						<Logo />
					</div>

					<div className={"col-lg-3"}/>

					<div className={"col-lg-7 menu-container"}>
						<div className={"menu"}>
							<label style={{ color: '#212B6D' }}>Resources</label>
							<ul>
								<li><a href={"#"}>White Paper</a></li>
								<li><a href={"#"}>Investors</a></li>
								<li><a href={"#"}>Compliance</a></li>
								<li><a href={"#"}>Blog</a></li>
								<li><a href={"#"}>FAQ</a></li>
								<li><a href={"#"}>Media</a></li>
							</ul>
						</div>

						<div className={"menu"}>
							<label style={{ color: '#002AA1' }}>Community</label>
							<ul>
								<li><a href={"#"}>Telegram</a></li>
								<li><a href={"#"}>Twitter</a></li>
								<li><a href={"#"}>Medium</a></li>
								<li><a href={"#"}>GitHub</a></li>
								<li><a href={"#"}>LinkedIn</a></li>
							</ul>
						</div>

						<div className={"menu"}>
							<label style={{ color: '#E44077' }}>Organisation</label>
							<ul>
								<li><a href={"#"}>Team</a></li>
								<li><a href={"#"}>Opportunities</a></li>
								<li><a href={"#"}>Contact</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div className={"row copyright-container"}>
					<p>© 2018 Maple Technologies Limited</p>
					<p className={"separator"}> | </p>
					<p> Terms & Conditions </p>
					<p className={"separator"}> | </p>
					<p> Privacy Policy </p>
				</div>
			</footer>
		)
	}
}

export default Footer;