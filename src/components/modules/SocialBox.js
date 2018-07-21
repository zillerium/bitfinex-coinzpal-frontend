import React from 'react';

import 'styles/3-modules/social-box.css';

import links from 'data/links';

class SocialBox extends React.Component {

	render() {
		const props = this.props;
		return (
			<ul className={"social-box" + (props.className ? (" " + props.className) : "")}>
				<li><a href={links.telegram} target={"_blank"}><img src={require("assets/icons/TelegramIcon.png")} alt="telegram"/></a></li>
				<li><a href={links.twitter} target={"_blank"}><img src={require("assets/icons/TwitterIcon.png")} alt="twitter"/></a></li>
				<li><a href={links.medium} target={"_blank"}><img src={require("assets/icons/MediumIcon.png")} alt="medium"/></a></li>
				<li><a href={links.github} target={"_blank"}><img src={require("assets/icons/GitHubIcon.png")} alt="github"/></a></li>
				<li><a href={links.linkedin} target={"_blank"}><img src={require("assets/icons/LinkedInIcon.png")} alt="linkedin"/></a></li>
			</ul>
		)
	}
}

export default SocialBox;