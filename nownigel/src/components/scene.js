import React from 'react'
import Svgmanstand from './svgmanstand'
import Svgmanstand2 from './svgmanstand2'

export default class Scene extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return(

			<div className="positioncenter positionabsolute heightfull widthfull">

				<div className="positioncenter positionabsolute heightfull widthfull backgroundcolorone">

					<Svgmanstand />

				</div>

			</div>


		)
	}
}
