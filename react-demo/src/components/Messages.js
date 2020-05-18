import React, { Component } from 'react';

//a new component
export class HelloMessage extends Component {

  //return a DOM element
  render() {

    console.log(this.props.msg);

    let greeting = "Hello you world!";
    let whatClass = "text-success"

    let localMsg = this.props.msg;
    if(this.props.isLoud){
      localMsg = localMsg.toUpperCase()+"!!!";
    }


    return (
      <div className={whatClass}>
        <p id="hello" >
          {localMsg}
        </p>
        { /*this is a comment*/}
        {/* <p class="lead">This is a component!</p> */}
      </div>
    );
  }
}

export class GoodbyeMessage extends Component {
  render() {
    return <p className="text-primary">{this.props.msg}!</p>
  }
}

export class MessageList extends Component {
  render() {

    let messagesArray = this.props.messages;

    let elemArray = messagesArray.map((message) => {
      //return the transformed version
      let isLoud = false;
      if(message.toLowerCase() == "banana")
        isLoud = true;

      let transformed = <HelloMessage key={message} msg={message} isLoud={isLoud} />;
      return transformed;
    })

    // let elemArray = [
    //   <HelloMessage key={this.props.messages[0]} msg={this.props.messages[0]} isLoud={false} />,
    //   <HelloMessage key={this.props.messages[1]} msg={this.props.messages[1]} isLoud={true} />,
    //   <HelloMessage key={this.props.messages[2]} msg={this.props.messages[2]} isLoud={false} />,
    //   <HelloMessage key={this.props.messages[3]} msg={this.props.messages[3]} isLoud={false} />
    // ]

    return (
      <div>
        {elemArray}
        <GoodbyeMessage msg="Thanks for watching" />
        {/* <GoodbyeMessage msg="Goodbye" />
        <GoodbyeMessage msg="So long" /> */}
      </div>
    )
  }
}
