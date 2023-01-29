import React from "react"

import Skill from "./Skill"
import reactIcon from "assets/icons/react"
import dockerIcon from "assets/icons/docker"
import postgresIcon from "assets/icons/postgresql"
import pythonIcon from "assets/icons/python"
import "./style.scss"

function Skills() {
	return (
		<div id="skills" className="skills">
			<div className="skills__container">
				<div className="section__title">
					<h3>My skill set</h3>
				</div>
				<div className="skills__lists">
					<Skill
						name="Front-end"
						detail="React.js / Redux / Bootstrap
JavaScript / TypeScript
"
						icon={reactIcon}
					/>
					<Skill
						name="Back-end"
						detail="Python / Django
Java / Quarkus / Spring / Kafka
C / C++
Restful API / GraphQL"
						icon={pythonIcon}
					/>
					<Skill
						name="Database"
						detail="PostgreSQL
MySQL
Elasticsearch"
						icon={postgresIcon}
					/>
					<Skill
						name="DevOps"
						detail="Docker / Kubernetes
AWS(Amazon Web Service)
Postman
Git"
						icon={dockerIcon}
					/>
				</div>
			</div>
		</div>
	)
}

export default Skills
