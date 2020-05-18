import React, { Component } from 'react';
import TaskList from './Tasks';
import { AddTaskForm } from './TaskForms';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [] //what is in the array/what the data is
    }
  }

  componentDidMount() {
    console.log("we're mounted, so can re-rendered") //safe to call setState

    fetch('./data/tasks.json').then((res) => res.json()).then((data) => {
      this.setState((currState) => {
        //let allTasks = currState.tasks.concat(data);
        //do processing to fix keys
        return {tasks: data}
      }); //end of setState, calls render()
    }); //end of fetch
  }

  //a function that changes whether a task is complete
  toggleTask = (taskId) => {
    //when called, update state
    this.setState((currState) => {
      //change any relevant tasks
      let newUpdatedTasksArray = currState.tasks.map((eachTask) => {
        let taskCopy = Object.assign({}, eachTask) //make a copy
        if(taskCopy.id === taskId){
          taskCopy.complete = !taskCopy.complete;
        }
        return taskCopy;
      });
      //return the state changes
      return {tasks: newUpdatedTasksArray};
    })

  }

  addTask = (newDescription) => {
    //when called, update state
    this.setState((currState) => {
      let newTask = {
        id: currState.tasks.length+1,
        description: newDescription,
        complete: false
      }

      let newTasksArray = currState.tasks.concat( [newTask] )

      //return the state changes
      return {tasks: newTasksArray};
    })
  }

  render() {
    console.log("rendering app");

    // if(this.state.tasks === undefined){
    //   return null; //render nothing
    // }

    //do data processing
    let incompleteArray = this.state.tasks.filter((task) => !task.complete);
    console.log("Number of incomplete tasks", incompleteArray.length);

    return (
      <div className="container">
        <p className="lead" onClick={() => this.addTask("testing")}>
          Num things I have to do: <strong>{incompleteArray.length}</strong>
        </p>
        {/* pass down the array */}
        <TaskList tasks={this.state.tasks} whatToDoWhenClicked={this.toggleTask} />
        <AddTaskForm howToAdd={this.addTask} />
      </div>
    );
  }
}