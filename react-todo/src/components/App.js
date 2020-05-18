import React, { Component } from 'react';
import TaskList from './Tasks';
import { AddTaskForm } from './TaskForms';

export default class App extends Component {
  render() {
    //do data processing
    let incomplete = this.props.tasks.filter((task) => !task.complete);
    //console.log("Number of tasks:", incomplete.length);

    return (
      <div className="container">
        <p className="lead">
          Num things I have to do:
          <strong>{incomplete.length}</strong>
        </p>
        <TaskList tasks={this.props.tasks} />
        <AddTaskForm />
      </div>
    );
  }
}