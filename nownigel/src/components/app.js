import React from 'react'
import Scene from './scene'
import Navigation from './navigation'

export default class App extends React.Component {

	render() {

		var projects = {
			name: 'nigel'
		}

		console.log(projects);
		return(
			<div>

				<Navigation showBulkActions={true} name={'nigel'}/>
				<Scene />
				<h1>Max Holiway</h1>
				<span></span>

			</div>
		);
	}
}
