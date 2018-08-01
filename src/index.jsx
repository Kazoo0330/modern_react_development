import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello, world!</h1> 
    </div>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
)