import React from 'react'

export default class Goodbye extends React.Component {
	constructor(props) {
		super(props);
	}




	render() {

			var style = {
			color: 'red'
		};

		return(
				<span className="positionrelative nav floatleft widthfull">

					<h1 style={style} className="nav floatleft widthfull"> GoodBye from react & {this.props.name} </h1>
					<h2 className="nav floatleft widthfull"> Hello from {this.props.name2} </h2>
					<h3 className="nav floatleft widthfull">c</h3>
					<h4 className="nav floatleft widthfull">c</h4>

				</span>
		)
	}
}
