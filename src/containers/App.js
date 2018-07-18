import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/withClass';

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      persons : [
        { id:"aef3",name: "Phil", age: 22 },
        { id:"asdf2",name: "Don", age: 21 },
        { id:"afdsa1",name: "Cad", age: 20 }
      ],
      otherState: "some value",
      showPersons: false
    }
    console.log('[App.js] Inside Constructor', props)
  }
  componentWillMount(){
    console.log('[App.js] inside componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] inside componentDidMount')
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState)
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }
componentWillUpdate(nextProps,nextState){
    console.log('UPDATES App.js] Inside componentWillUpdate', nextProps, nextState);
}
componentDidUpdate(){
    console.log('UPDATES App.js] Inside componentDidUpdate');

}

  // state = {
  //   persons : [
  //     { id:"aef3",name: "Phil", age: 22 },
  //     { id:"asdf2",name: "Don", age: 21 },
  //     { id:"afdsa1",name: "Cad", age: 20 }
  //   ],
  //   otherState: "some value",
  //   showPersons: false
  // }
  
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
    console.log('[App.js] inside Render')
    let persons = null;

    if (this.state.showPersons){
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />        
      );
    }

    return (
      <WithClass classes={classes.App}>
          <button
            onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
      </WithClass>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'working now'))
  }
}

export default App;
