import React, { Component } from 'react';

export class AddTaskForm extends Component {
  render() {
    return (
      <form>
        <input
          className="form-control mb-3"
          placeholder="What else do you have to do?"
        />
        <button className="btn btn-primary">Add task to list</button>
      </form>
    );
  }
}