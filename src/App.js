import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons : [
      { id:"aef3",name: "Phil", age: 22 },
      { id:"asdf2",name: "Don", age: 21 },
      { id:"afdsa1",name: "Cad", age: 20 }
    ],
    otherState: "some value",
    showPersons: false
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();//slice (w/ no args) copies array and makes new one
    const persons = [...this.state.persons];//using spread operator to make new array that's copy of persons
    persons.splice(personIndex,1);
    this.setState({persons:persons}) 
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      //findIndex goes through each element
      return p.id === id
    })

    const person = {
      //making a copy of the persons state for the specific person we want to change
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons : persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
  }

  render() {
    
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                changed={(event) => this.nameChangedHandler(event,person.id)}/>
            </ErrorBoundary>
          })}
          
        </div>
      );
      btnClass = classes.Red;
    }
    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code className={assignedClasses.join(' ')}>src/App.js</code> and save to reload.
        </p>
        <button
          className={btnClass} 
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
            {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'working now'))
  }
}

export default App;
