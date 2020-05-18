import React, { Component } from 'react';

export class Task extends Component {
  //helper method
  getClassName() {
    let className = '';
    if (this.props.task.complete) {
      className = 'font-strike';
    }
    return className;
  }

  render() {
    let thisTask = this.props.task; //can give local name for readability
    return (
      <li className={this.getClassName()} >
        {thisTask.description}
      </li>
    );
  }
}

export default class TaskList extends Component {
  render() {
    //do data processing
    let taskComponents = this.props.tasks.map((eachTask) => {
      let singleTaskElem = <Task key={eachTask.id} task={eachTask} />
      return singleTaskElem;
    })

    return (
      <ol>
        {taskComponents}
      </ol>
    );
  }
}