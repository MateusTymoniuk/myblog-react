import React, { Component } from 'react';

import './styles.css';

export class PostsFormPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.body);
  }

  handleTitleInput = (event) => {
    this.setState({ title: event.target.value });
  }

  handleBodyInput = (event) => {
    this.setState({ body: event.target.value });
  }

  render() {
    return (
      <form className="posts-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Title:
            <input type="text" name="title" className="input-control" value={this.state.title} onChange={this.handleTitleInput}></input>
          </label>
        </div>
        <div className="form-group">
          <label>
            Body:
            <textarea name="body" className="input-control" value={this.state.body} onChange={this.handleBodyInput}></textarea>
          </label>
        </div>
        <div className="form-group">
          <button type="submit" value="Submit">Submit</button>
        </div>
      </form>
    );
  }
}
