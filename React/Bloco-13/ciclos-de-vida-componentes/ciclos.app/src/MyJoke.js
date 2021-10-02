import React from "react";

class MyJoke extends React.Component {
  constructor() {
    super();
    console.log('constructor')

    this.state = {
        piada: 'Minha piada'
    };
  }

  componentDidMount(){
    console.log('component')
  }

  render() {
    console.log('render')
    return (<span>{ this.state.piada }</span>)
  }
}

export default MyJoke;