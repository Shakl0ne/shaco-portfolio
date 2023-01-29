import React from "react"

import Header from "components/landing/Header/Header"
import Skills from "components/landing/Skills"
import RecentProjects from "components/landing/RecentProjects"
import CtaCard from "components/common/CtaCard"
import Footer from "components/common/Footer"

import "./style.scss"

const Home = () => {
	return (
		<div>
			<Header />
			<Skills />
			<RecentProjects />
			<CtaCard
				title="Interested in Collaboration?"
				detail="Let’s have a conversation! I’d love to hear about
					what you’re working on and find a way to work
					together."
				btVariant="solid"
				label="Get in touch"
			/>

			<Footer />
		</div>
	)
}

export default Home
