import React from 'react';

import { Arrow, Logo, SocialBox } from 'components/modules';

import 'styles/2-sections/faq.css';

import links from 'data/links';

class Faq extends React.Component {

	render() {
		return (
			<section className={"section springboard"}>
				<header className={"row"}>
					<Logo className={"col-lg-1"}/>

					<div className={"spacer"}/>

					<ul className={"col-lg-2 social-list"}>
						<li><a href={"https://telegram.org"} target={"_blank"}><img
							src={require("assets/icons/TelegramIcon.png")} alt="telegram"/></a></li>
						<li><a href={"https://twitter.com"} target={"_blank"}><img
							src={require("assets/icons/TwitterIcon.png")} alt="twitter"/></a></li>
						<li><a href={links.medium} target={"_blank"}><img
							src={require("assets/icons/MediumIcon.png")} alt="medium"/></a></li>
					</ul>
				</header>

				<div className={"row front-container"}>
					<div className={"col-lg-6 text-container"}>
						<h1>Where funds flow</h1>
						<h2>Chronos is an open protocol that facilitates continuous peer-to-peer payments</h2>
					</div>

					<div className={"col-6 col-lg-8 items-container"}>
						<div className={"row justify-content-between community"}>
							<a className={"col-12 col-lg-2 highlight"} href={"#"} target={"_blank"}>
								<img src={require("assets/icons/CommunityIcon.png")} alt={"community"}/>
								<div className={"spacer"}/>
								<span>Community</span>
							</a>
							<span className={"col-lg-8"}>Join the developer community and build on Chronos</span>
							<a className={"col-lg-1"} href={"#"} target={"_blank"}>>></a>
						</div>

						<div className={"spacer"}/>

						<div className={"row justify-content-between whitepaper"}>
							<a className={"col-12 col-lg-2 highlight"} href={links.medium} target={"_blank"}>
								<img src={require("assets/icons/WhitepaperIcon.png")} alt={"whitepaper"}/>
								<div className={"spacer"}/>
								<span>Whitepaper</span>
							</a>
							<span className={"col-lg-8"}>Click to read through our technical whitepaper</span>
							<a className={"col-lg-1"} href={links.medium} target={"_blank"}>>></a>
						</div>
					</div>

					<div className={"col-8 social-box-container"}>
						<h3>Join the conversation</h3>
						<SocialBox />
					</div>
				</div>

				<Arrow redirectTo={"features-title"}/>
			</section>
		);
	}
}

export default Faq;