import React from 'react'
import uuid from 'uuid'
import ProjectItem from './projectitem'
export default class AddProject extends React.Component {

	// like ng-repeat: this component will be used in iteration, displaying called Data "props"
	constructor(props) {
		super(props);

		//placeholder
		this.state = {
			newProject:{
			}
		}
	};

	//static data for "Select iteration"
	static get defaultProps() {
    return {
			categories: ['Web Design', 'Mobile Dev', 'Web Development', 'Graphic Design' ]
		}
	}

	//pass event (e) to preventDefault
	handleSubmit(e) {
		console.log('from submit');
		console.log(this.refs.title.value);
		e.preventDefault();

		if (this.refs.title.value === '') {
			console.log('nope, title is required!');
		} else {
			this.setState ({
				newProject: {
					id:uuid.v4(),
					title: this.refs.title.value,
					category: this.refs.category.value
				}
			},
				function() {
					console.log(this.state);

					//passdata up to app.js | with addProject={this.handleAddProject.bind(this)} (this function is now accessable to parent importer)
					this.props.addProject(this.state.newProject);
				})
		}

	}

	render() {


		//iterate through static default data and create "option" directives
		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value={category}>{category}</option>
		});

		//app return
		return(
			<div className="positionrelative floatleft">

				//app title
				<h3 className="fontcolorwhite"> add project </h3>

				//iterated Items from app.js PROP > .map iteration in hello (using projectitem component) to spin up final component {ProjectItem}
        {ProjectItem}

				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<label>Title</label><br/>
						<input type="text" ref="title" />
					</div>

					<div>
						<label>Category</label><br/>

						<select ref="category">
							{categoryOptions}
						</select>

					</div>

					<input type="submit" value="submit" />
				</form>
			</div>
		)
	}
}
