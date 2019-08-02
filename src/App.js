import React, { Component } from 'react'
import './App.css';

import Routes from './Routes';
import Navbar from './Navbar';

import butch from './images/butch.jpeg';
import charles from './images/charles.jpeg';
import james from './images/james.jpeg';
import lucy from './images/lucy.jpeg';
import maestro from './images/maestro.jpeg';
import patterson from './images/patterson.jpeg';
import rufus from './images/rufus.jpeg';
import rutherford from './images/rutherford.jpeg';
import taco from './images/taco.jpeg';


export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Butch",
        age: 10,
        src: butch,
        facts: [
          "Butch is a lover.",
          "Butch is a terrible guard dog.",
          "Butch loves to eat apples."
        ]
      },
      {
        name: "Charles",
        age: 1,
        src: charles,
        facts: [
          "Charles is very energetic.",
          "Charles loves scritches.",
          "Charles loves to eat bananas."
        ]
      },
      {
        name: "James",
        age: 1,
        src: james,
        facts: [
          "James went to Princeton.",
          "James used to belong to Michael Jordan.",
          "James loves to eat hot dogs."
        ]
      },
      {
        name: "Lucy",
        age: 3,
        src: lucy,
        facts: [
          "Lucy is very caring.",
          "Lucy loves to sleep next to you.",
          "Lucy loves to eat blueberries."
        ]
      },
      {
        name: "Maestro",
        age: 5,
        src: maestro,
        facts: [
          "Maestro is a cool dude.",
          "Maestro can hang with the homies.",
          "Maestro loves to eat whatever you feed him."
        ]
      },
      {
        name: "Patterson",
        age: 9,
        src: patterson,
        facts: [
          "Patterson thinks he's human.",
          "Patterson loves that country club life.",
          "Patterson loves to eat caviar."
        ]
      },
      {
        name: "Rufus",
        age: 2,
        src: rufus,
        facts: [
          "Rufus is a beach bum.",
          "Rufus loves to play fetch.",
          "Rufus loves to eat bananas."
        ]
      },
      {
        name: "Rutherford",
        age: 6,
        src: rutherford,
        facts: [
          "Rutherford is all beauty, no brains.",
          "Rutherford got lost in the bathroom yesterday.",
          "Rutherford loves to eat pennies."
        ]
      },
      {
        name: "Taco",
        age: 4,
        src: taco,
        facts: [
          "Taco has no sense of humor.",
          "Taco is usually asleep on the couch.",
          "Taco loves to eat tacos, of course."
        ]
      },
    ]
  }
  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
          </div>
      </div>
    )
  }
}

