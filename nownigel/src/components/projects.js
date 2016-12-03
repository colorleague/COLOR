import React from 'react'
import ProjectItem from './projectitem'
export default class Projects extends React.Component {
	constructor(props) {
		super(props)

	}


	render() {
		let cachedProjectIteration;
		// Think NG repeat, If there are still ARRY items in *this.props.projects* make an iteration of *cachedProjectIteration*, .map() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
		// from parent
		if(this.props.projects) {
			cachedProjectIteration = this.props.projects.map(project => {
				console.log(project);

				// return ProjectItem Component in every iteration
				return ( <ProjectItem key={project.title} project={project} /> );
			});
		};

		console.log(this.props.testitems);
		let iteratedItems;
		// Think NG repeat, If there are still ARRY items in *this.props.projects* make an iteration of *cachedProjectIteration*, .map() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
		// from parent
		if(this.props.testitems) {
			iteratedItems = this.props.testitems.map(testitem => {
				console.log(testitem);
			});
		};

		// projects from state/props
		console.log(this.props.projects);

		return(
			<span>
				<h1>{this.props.title}</h1>

				// display every iteration
				{cachedProjectIteration}
			</span>
		);
	}
}
