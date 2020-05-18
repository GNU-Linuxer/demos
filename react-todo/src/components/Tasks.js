import React, { Component } from 'react';

export class Task extends Component {
  // constructor(props) {
  //   super(props); //call parent's constructors, passing the props "up" the inheritance tree

  //   //must be called `state` -- must be an object
  //   this.state = {
  //     clickCount: 0,
  //     // isComplete: this.props.task.complete
  //   }


  // }

  //what to do when clicked!
  // toggleComplete = (event) => {
  //   console.log("You clicked on", this.props.task.description );
  //   //change (assign) a new value for this.props.task.complete
  //   //rerender

  //   //let stateChanges = {clickCount: this.state.clickCount+1} //new value for clickCount
    
  //   this.setState( (currState, currProps) => {
  //     let stateChanges = {
  //       clickCount: currState.clickCount+1,
  //       // isComplete: !currState.isComplete
  //     }
  //     return stateChanges //return what to merge!
  //   }); //(1)request change to state (modify the instance)
  //                                //(2) rerender this object!
  //   // console.log("after setState", this.state); //this no work
  // }

  //helper method
 
  getClassName() {
    let className = '';
    // if(this.state.isComplete) {
    if(this.props.task.complete) {
      className = 'font-strike';
    }
    return className;
  }

  handleClick = (event) => {
    //what to do when clicked
    //another name for "App#toggleTask()"
    this.props.whatToDoWhenClicked(this.props.task.id);
  }

  render() {
    // console.log("rendering", this.props.task);
    // console.log(this.state);

    let thisTask = this.props.task; //can give local name for readability

    return (
      <li className={this.getClassName()} onClick={this.handleClick} >
        {thisTask.description}
        {/* (clicked {this.state.clickCount}) */}
      </li>
    );
  }
}

export default class TaskList extends Component {
  render() {
    //do data processing
    //this.props.tasks is an ARRAY of JS Objects
    let taskComponents = this.props.tasks.map((eachTask) => {
      let singleTaskElem = <Task key={eachTask.id} task={eachTask} whatToDoWhenClicked={this.props.whatToDoWhenClicked} />
      return singleTaskElem;
    })

    //what DOM is shown in a <TaskList>
    return (
      <ol>
        {taskComponents}
      </ol>
    );
  }
}