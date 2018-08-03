import React from 'react'
import ReactDOM from 'react-dom'

import { var1 } from './module';

const HelloWorld = () => {
  return (
    <div>
      <h1>Sup?</h1>
    </div>
  );
}


console.log(var1);

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
)
