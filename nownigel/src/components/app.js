import React from 'react'
import Scene from './scene'
import Navigation from './navigation'
import Projects from './projects'
import AddProject from './addproject'

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

			testitems: [
				{
					title: 'Test 1',
					category: 'Front-End'
				},
				{
					title: 'Test 2',
					category: 'Front-End'
				}
			],

			projects: [
			/*{
					title: 'React',
					category: 'Front-End'
				},
				{
					title: 'Angular',
					category: 'Front-End'
				},
				{
					title: 'Jquery/Ajax',
					category: 'Front-End'
				},
				{
					title: 'Node/Mongo',
					category: 'Back-End'
				},
				{
					title: 'Ruby on Rails',
					category: 'Back-End'
				},
				{
					title: 'Python',
					category: 'Back-End'
				},
				{
					title: 'Animation',
					category: 'Content'
				},
				{
					title: 'Branding',
					category: 'Graphics'
				}*/
			]
		}
	}

	componentWillMount() {

		//lifecycle methods
		this.setState(
			{
				projects: [{
					title: 'React',
					category: 'Front-End'
				},
				{
					title: 'Angular',
					category: 'Front-End'
				},
				{
					title: 'Jquery/Ajax',
					category: 'Front-End'
				},
				{
					title: 'Node/Mongo',
					category: 'Back-End'
				},
				{
					title: 'Ruby on Rails',
					category: 'Back-End'
				},
				{
					title: 'Python',
					category: 'Back-End'
				},
				{
					title: 'Animation',
					category: 'Content'
				},
				{
					title: 'Branding',
					category: 'Graphics'
				}]
			}
		);
	}

	handleAddProject(project){
		console.log(project)

		//data is Immutaible, pull down original list, change, push up
		let projects = this.state.projects;
		projects.push(project);
		this.setState({
			projects:projects
		})
	}

	render() {

		var projects = {
			name: 'nigel'
		}

		console.log(projects);
		return(
			<div>

				<Navigation showBulkActions={true} name={projects.name}/>
				<Scene />
				<AddProject addProject={this.handleAddProject.bind(this)}/>
				<Projects projects={this.state.projects} testitems={this.state.testitems} title="Hello, from projects world" />
			</div>
		);
	}
}
