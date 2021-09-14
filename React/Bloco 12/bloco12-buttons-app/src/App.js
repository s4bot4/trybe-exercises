import './App.css';
import data from './data';
import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colorFiltered: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      colorFiltered: event.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <input name="textColor" type="text" placeholder="Digite uma cor" onChange={this.handleChange} />
        <ul>
          {data.filter(({ color}) => color.includes(this.state.colorFiltered))
          .map(({color, value}) => <li key={value}>{ color }</li> )}
        </ul>
      </div>
    );
  }
}

export default App;
