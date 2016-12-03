import React from 'react'

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		var divStyle = {
		  background: "#eee",
		  padding: "20px",
		  margin: "20px"
		};

		console.log(this.props.name, this.props.showBulkActions)

		var d = new Date();
		console.log(d.toJSON());

		return(

			<div className="positioncenter positionabsolute heightfull widthfull">

				<ul className={"positiontopleft positionabsolute heightten widthtwentyfive floatleft animated1 topdown delay02 zindexone " + (this.props.showBulkActions ? 'show' : 'hidden')}>
					<div className={"positionrelative heightten widthtenvh floatleft zindexone " + (this.props.showBulkActions ? 'animated1 pulse infinite delay02' : 'animated1 pulse delay02')}>
						<span className="positionabsolute positioncenter buttonOneUnpressed heightfive widthfivevh floatleft zindexone"></span>
					</div>

					<li className="lineheightten widthfive fonsizefive floatright zindexone font-family-josefin">{this.props.name}</li>
				</ul>

				<ul className="positiontop positionabsolute heightten widthtwentyfive backgroundcolorwhite floatleft animated1 topdown delay02 zindexone">
					<div className="positioncenter positionabsolute heightten widthtenvh floatleft animated1 topdown delay02 zindexone">
						<span className="positionabsolute positioncenter buttonOneUnpressed heightfive widthfivevh floatleft zindexone"></span>
					</div>
				</ul>

				<ul className="positiontopright positionabsolute heightten widthtwentyfive floatleft animated1 topdown delay02 zindexone">

					<li onClick="starter()" className="lineheightten fonsizetwofive fontcolorwhite floatleft zindexone font-family-arvo marginonerightvh">contact</li>
					<li onClick="starter()" className="lineheightten fonsizetwofive fontcolorwhite floatleft zindexone font-family-arvo marginonerightvh">home</li>
					<div className="positionrelative heightten widthtenvh floatright animated1 topdown delay02 zindexone">
						<span className="positionabsolute positioncenter buttonOneUnpressed heightfive widthfivevh floatleft zindexone"></span>
					</div>

				</ul>

				<div className="positionleft positionabsolute heightten widthtenvh floatleft animated1 topdown delay02 zindexone">
					<span className="positionabsolute positioncenter buttonOneUnpressed heightfive widthfivevh floatleft zindexone"></span>
				</div>

				<div className="positionright positionabsolute heightten widthtenvh floatleft animated1 topdown delay02 zindexone">
					<span className="positionabsolute positioncenter buttonOneUnpressed heightfive widthfivevh floatleft zindexone"></span>
				</div>

				<ul className="positionbottomleft positionabsolute heightten widthtwentyfive floatleft animated1 topdown delay02 zindexone">

					<div className="positionrelative heightten widthtenvh floatleft animated1 topdown delay02 zindexone">
						<span className="positionabsolute positioncenter buttonOneUnpressed heightfive widthfivevh floatleft zindexone"></span>
					</div>

					<li className="lineheightten floatright zindexone font-family-josefin">using <b>react</b> animation</li>
				</ul>

				<ul className="positionbottom positionabsolute heightten widthtwentyfive floatleft animated1 topdown delay02 zindexone">

					<div className="positionrelative heightten widthtenvh floatleft animated1 topdown delay02 zindexone">
						<span className="positionabsolute positioncenter buttonOneUnpressed heightfive widthfivevh floatleft zindexone"></span>
					</div>

					<li className="lineheightten widthfive floatleft zindexone font-family-snippet">home</li>
					<li className="lineheightten widthfive floatleft zindexone font-family-snippet">about</li>
					<li className="lineheightten widthfive floatleft zindexone font-family-snippet">home</li>
				</ul>

				<ul className="positionbottomright positionabsolute heightten widthtwentyfive floatleft animated1 topdown delay02 zindexone">

					<li className="positionrelative lineheightten floatleft zindexone font-family-arvo"><b>built by nigel</b></li>

					<div className="positionrelative heightten widthtenvh floatright animated1 topdown delay02 zindexone">
						<span className="positionabsolute positioncenter buttonOneUnpressed heightfive widthfivevh floatleft zindexone"></span>
					</div>

				</ul>

			</div>

		)
	}
}
