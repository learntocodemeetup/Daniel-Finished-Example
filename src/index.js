import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let colorCircles = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo ']

function createMastermindArray () {
  const rowLength= 4;
  var mastermindArray=[];
  for (let i=0; i < rowLength; i++) {
    let color = colorCircles[Math.floor(Math.random() * 6)]
    mastermindArray.push(color)
  }
  return mastermindArray;
}

var mastermindArray = createMastermindArray();

ReactDOM.render(
  <App
    colorCircles={colorCircles}
    mastermindArray={["blue", "blue", "red", "green"]}
  />,
  document.getElementById('root')
);
registerServiceWorker();