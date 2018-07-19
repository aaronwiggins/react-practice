import React, {Component} from 'react';
// import Radium from 'radium';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor', props)
      }
      componentWillMount(){
        console.log('[Person.js] inside componentWillMount');
      }
      componentDidMount(){
        console.log('[Person.js] inside componentDidMount')
      }
    render(){
        console.log('[Person.js] inside render')

        return (
        <Aux>
            <p onClick={this.props.click}>I'm {this.props.name}, and I'm { this.props.age } years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </Aux>
        )
    }
}  //{
    // const rnd = Math.random();

    // if (rnd > 0.7){
    //     throw new Error('Something went wrong');
    // }

// }

export default withClass(Person,classes.Person);