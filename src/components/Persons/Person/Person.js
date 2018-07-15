import React, {Component} from 'react';
// import Radium from 'radium';
import classes from './Person.css';

class Person extends Component {
    render(){
        return (
        <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name}, and I'm { this.props.age } years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </div>
        )
    }
}  //{
    // const rnd = Math.random();

    // if (rnd > 0.7){
    //     throw new Error('Something went wrong');
    // }

// }

export default Person;