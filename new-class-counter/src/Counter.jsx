import {Component} from 'react';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = { 
          counter: 0,
        }
      }
      increment = () => {
          this.setState({counter: this.state.counter + 1});
      }
      decrement = () => {
          this.setState({counter: this.state.counter - 1 < 0 ? 0 : this.state.counter - 1})
      }
    render(){
        return (
            <>
            <button onClick={this.increment}>Increment</button>
            <div>Counter Value: {this.state.counter}</div>
            <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}
export default Counter;