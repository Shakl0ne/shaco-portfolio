import React from "react"


import "./style.scss"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<p>Copyright © Linghao {new Date().getFullYear()}</p>
			</div>
		</div>
	)
}

export default Footer
