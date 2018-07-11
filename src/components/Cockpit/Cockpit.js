import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;    
    }
    

    const assignedClasses = [];
    if (props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
            To get started, edit <code className={assignedClasses.join(' ')}>src/App.js</code> and save to reload.
            </p>
            <button
            className={btnClass} 
            onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}
export default cockpit;