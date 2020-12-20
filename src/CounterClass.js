import React, { Component } from 'react'

class CounterClass extends Component {
    constructor(){
        super();
        this.state={
            count:0,
        };
    }
    increment =() => {
        this.setState({count:this.state.count + 1})
    }

    decrement =() => {
        this.state.count && this.setState({count:this.state.count - 1})
    }

    reset =() => {
        this.setState({count:0})
    }
    render() {
        return (
            <div>
                <button className="decrementBtn" onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button className="incrementBtn" onClick={this.increment}>+</button>
                <button className="resetBtn" onClick={this.reset}>Reset</button>
                
            </div>
        )
    }
}
export default CounterClass;
