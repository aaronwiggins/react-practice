import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: "Phil", age: 22 },
      { name: "Don", age: 21 },
      { name: "Cad", age: 20 }
    ],
    otherState: "some value"
  }
  switchNameHandler = (newName) => {
    // console.log('was clicked')
    // DONT DO THIS this.state.persons[0].name = "Changed"
    this.setState({
      persons : [
        { name: newName, age: 22 },
        { name: "Don", age: 21 },
        { name: "Cad", age: 2 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.switchNameHandler("Changed")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "changed!")} >
          My hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'working now'))
  }
}

export default App;
