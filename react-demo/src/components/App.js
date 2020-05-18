import React, { Component } from 'react';

import { MessageList } from './Messages';

export default class App extends Component  {
  render() {
    let messagesArray = ['Apple', 'Banana', 'Grape', 'Orange']
    return (
      <div>
        <h1>Here are your messages:</h1>
        <MessageList messages={messagesArray} />
      </div>
    )
  }
}