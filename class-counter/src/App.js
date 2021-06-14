import './App.css';
import {Component} from 'react';
import Counter from './Counter';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      showCounter: false,
    }
  }
  toggleCounterDisplay = () => {
    this.setState({showCounter: !this.state.showCounter});
  }
  render(){
    const {showCounter} = this.state || false;
    return (
      <div className="app-container">
        <button onClick={this.toggleCounterDisplay}> Toggle Mount</button>
        {showCounter && <Counter /> }
      </div>
    )
  }
}
export default App;