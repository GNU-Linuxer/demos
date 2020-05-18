import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import 'whatwg-fetch'; //make sure we're able to fetch

import App from './components/App';

//the "data"
const SAMPLE_TASKS = [
  {id:1, description:'Learn JSX', complete:true},
  {id:2, description:'Learn about React State', complete:false},
  {id:3, description:'Get some sleep', complete:false} 
];

//pass data in as a prop!
ReactDOM.render(<App tasks={SAMPLE_TASKS} />, 
  document.getElementById('root'));