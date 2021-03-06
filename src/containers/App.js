import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

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
      showPersons: false,
      toggleClicked:0,
      authenticated:false
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

static getDerivedStateFromProps(nextProps, prevState){
  //executed when props are updated
  console.log('[UPDATE App.js] inside getDerivedStateFromProps', 
  nextProps, 
  prevState);
  return prevState
}
getSnapshotBeforeUpdate(){
  //snapshot of DOM right before it changes
  console.log('[UPDATE App.js] inside getSnapshotBeforeUpdate'); 

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
    this.setState( (prevState,props)=>{
      return{
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked+1 
      }   
    });
  }

  loginHandler = () => {
    this.setState({authenticated:true});
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
      <Aux>
          <button
            onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.togglePersonsHandler}/>
            <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'working now'))
  }
}

export default withClass(App,classes.App);