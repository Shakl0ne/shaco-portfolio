import React from "react"

import profile_image from "../../../../assets/images/profile_image.png"
import Button from "../../../common/Button"

import "./style.scss"
import {Greeting} from "./Greeting";


export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__container">
                <div className="banner__content">

                    <Greeting
                        text="HELLO, I’M"
                        />
                    <h1>Full Stack Developer</h1>
                    <h5>
                        I’m a Israel-based Full Stack Developer with a tendency to Backend.
                        I love adopting new technologies and seeking new challenges that help
                        me invest all my skills and experience into <span className="text-highlight"> succeeding them</span>
                        . From my internship experience
                        as a <span className="text-highlight"> backend developer</span>,
                        I've worked on an open-source data synchronization project using Java Quarkus framework and
                        Kafka.
                        I also have experience in web application development using react, typescript and django.
                        Besides, I am native in Chinese, fluent in English, with advanced Korean and basic Hebrew.
                        You can find my project links below &#128071;
                    </h5>
                    <a href="#recent-projects">
                        <Button label="View projects" variant="outline"/>
                    </a>
                </div>
                <div className="banner__image">
                    <img src={profile_image} alt={'my profile pic'}/>
                </div>
            </div>
        </div>
    )
}
export default Banner
