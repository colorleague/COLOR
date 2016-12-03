import React from 'react'

export default class Svgmanstand extends React.Component {
	constructor(props) {
		super(props);
	}




	render() {

		return(
			<div className="positioncenter positionabsolute heighthalf widthten animated1 infinite pulse">
				<span className="positioncenter positionabsolute heightfullflex widthfullflex animated1 infinite frameonefourth backgroundsvgmanstand"></span>
				<span className="positioncenter positionabsolute heightfullflex widthfullflex animated1 infinite frametwofourth backgroundsvgwomanstand"></span>
				<span className="positioncenter positionabsolute heightfullflex widthfullflex animated1 infinite framethreefourth backgroundsvgmanstand"></span>
				<span className="positioncenter positionabsolute heightfullflex widthfullflex animated1 infinite framefourfourth backgroundsvgwomanstand"></span>
			</div>
		)
	}
}
