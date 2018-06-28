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
    otherState: "some value",
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name: "Phil", age: 22 },
        { name: event.target.value, age: 21 },
        { name: "Cad", age: 2 }
      ]
    })
  }

  togglePersonsHandler = () => {
    console.log('bitch')
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
    console.log('bitch')
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        
          
        {
          this.state.showPersons === true ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
              />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "changed!")} 
                changed={this.nameChangedHandler}>
                My hobbies: Racing
              </Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} /> 
            </div>
          : null
          
        }
        
        
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'working now'))
  }
}

export default App;
