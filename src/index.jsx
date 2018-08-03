import React from 'react'
import ReactDOM from 'react-dom'

import { var1, function1, ReactComponent } from './module';

const HelloWorld = () => {
  return (
    <div>
      <h1>Sup?</h1>
    </div>
  );
}


console.log(var1);
function1();

ReactDOM.render(
  <ReactComponent />,
  document.getElementById('root')
)
