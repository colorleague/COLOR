import React from 'react'

export default class ProjectItem extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <li className="project">
        // pass in during iteration
        {this.props.project.title} - {this.props.project.category}
      </li>
    );
  }
}
