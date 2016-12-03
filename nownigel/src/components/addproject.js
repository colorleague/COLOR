// a from to add new projects

import React from 'react'

export default class AddProject extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      newProject: {}
    }
  }

  static get defaultProps() {
    return {
			categories: ['Front-End', 'Back-End', 'Content', 'Graphics' ]
		}
	}

  handleSubmit(e) {

    e.preventDefault();

    console.log('submitted' + this.refs.title.value);
    console.log(this.refs.title.value);

    //validation
    if(this.refs.title.value === '') {
      alert('naw');
    } else {
      this.setState({ newProject:{
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function () {
        console.log(this.state);

        //send data up
        this.props.addProject(this.state.newProject);
      });
    }

  }

  render() {

    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>{category}</option>
      )
    });

    return(
      <div className="Projects">
        <h3> add project </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>title</label><br />
            <input type="text" ref="title" />
          </div>

          <div>
            <label>category</label><br />
            <select type="text" ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="submit" />

        </form>
      </div>

    );
  }
}
