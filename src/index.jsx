import React from 'react'
import ReactDOM from 'react-dom'

class Human {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  }

  callMyProfile() {
    console.log(this.name, this.age);
  }
}

const Kazoo = new Human("Kazoo", 25);
// console.log(Kazoo);
Kazoo.callMyProfile();

const Sheena = new Human("Sheena Ringo", 40);
// console.log(Sheena);
Sheena.callMyProfile();

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
