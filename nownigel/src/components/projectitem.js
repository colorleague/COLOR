import React from 'react'

export default class ProjectItem extends React.Component {

	// like ng-repeat: this component will be used in iteration, displaying called Data "props"
	constructor(props) {
		super(props);
	}

	deleteProject(id) {

		this.props.onDelete(id);

	}

	render() {
		return(
			<li className="positionrelative project floatleft fontcolorwhite widthfull zindexone">
        <strong>{this.props.project.id}</strong><strong>{this.props.project.title}</strong>: - {this.props.project.category}

				<a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>delete</a>
			</li>
		)
	}
}
