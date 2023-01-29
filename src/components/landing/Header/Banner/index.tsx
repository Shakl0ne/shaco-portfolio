import React from "react"

import HeroImage from "../../../../assets/images/hero-image.png"
import HeaderBg from "../../../../assets/images/header__bg.png"
import Button from "../../../common/Button"

import "./style.scss"
// import {Icon} from "./Icon";

export const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__container">
				<div className="banner__content">
					<h3>HELLO, I’M Linghao Zhang </h3>

					<h1>Full Stack Developer</h1>
					<h5>
						I’m a Israel-based Full Stack Developer with a tendency to Backend.
						I love adopting new technologies and seeking new challenges that help
						me invest all my skills and experience into
						<span className="text-highlight"> succeeding them</span>. From my internship experience
						as a <span className="text-highlight"> backend developer</span>,
						I've worked on a open-source data synchronization project using Java Quarkus framework and Kafka.
						I also have experience in web application development using react, typescript and django.
						I am currently working on a microservices project using Java Spring, docker, Kafka, and k8s.
						You can find my project links below &#128071;
					</h5>
					<a href="#recent-projects">
						<Button label="View projects" variant="outline" />
						{/*<Icon />*/}
					</a>
				</div>
				<div className="banner__image">
					{/*<img src={} alt="Bikash Sharma smiling" />*/}
				</div>
			</div>
{/*			<img
				src={HeaderBg}
				alt="code abstract background"
				className="banner__bg"
			/>*/}
		</div>
	)
}
export default Banner
