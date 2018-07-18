import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';
const cockpit = (props) => {
    let btnClass = classes.Button;
    if (props.showPersons){
        btnClass = [classes.Button,classes.Red].join(' ');
    }

    const assignedClasses = [];
    if (props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <Aux>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h3>{props.appTitle}</h3>
            <p className="App-intro">
            To get started, edit <code className={assignedClasses.join(' ')}>src/App.js</code> and save to reload.
            </p>
            <button
            className={btnClass} 
            onClick={props.clicked}>Toggle Persons
            </button>
        </Aux>
    );
}
export default cockpit;