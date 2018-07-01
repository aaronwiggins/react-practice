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
  
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons}) 
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
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
          })}
          {/* <Person 
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
            age={this.state.persons[2].age} />  */}
        </div>
      )
    }
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
            {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'working now'))
  }
}

export default App;
