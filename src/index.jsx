import React from 'react'
import ReactDOM from 'react-dom'

class Human extends React.Component {
  constructor(props){
    super(props)
    this.state = { name: "Kazoo" };
  }

  render() {
    return (
      <h2 onClick={this.onButtonClick}>
        {this.state.name} {this.props.age}
      </h2>
    );
  }

  onButtonClick = () => {
    this.setState({ name: this.state.name + "san" });
  };
}

import ReactComponent from './ReactComponent';
const HelloWorld = () => {
  return (
    <div>
      <h1>Sup?</h1>
    </div>
  );
}

ReactDOM.render(
  <Human age="25" />,
  document.getElementById('root')
)
