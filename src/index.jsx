import React from 'react'
import ReactDOM from 'react-dom'

// export default pattern
import ClassComponent1 from "./ClassComponent1";
import ClassComponent2 from "./ClassComponent2";
// ______________________

// not export default pattern
import { ClassComponent3 } from "./ClassComponent3";
// __________________________

const HelloWorld = () => {
  return (
    <div>
      <h1>Sup?</h1>
    </div>
  );
}

ReactDOM.render(
  <div>
    <ClassComponent1 />
    <ClassComponent2 />
    <ClassComponent3 />
  </div>,
  document.getElementById('root')
)
