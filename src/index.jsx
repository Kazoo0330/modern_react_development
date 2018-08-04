import React from 'react'
import ReactDOM from 'react-dom'

import ReactComponent from './ReactComponent';
const HelloWorld = () => {
  return (
    <div>
      <h1>Sup?</h1>
    </div>
  );
}

ReactDOM.render(
  <ReactComponent name='kazoo' music='SheenaRingo' />,
  document.getElementById('root')
)
