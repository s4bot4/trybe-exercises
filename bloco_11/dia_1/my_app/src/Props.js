import React from "react";

function Greeting(props) {
    return (<h1>Hello! {props.name}</h1>);
  }


  class Greetings extends React.Component {
    render() {
      return (<h1>Hello, {this.props.name}</h1>);
    }
  }


class GreetingFullName extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default GreetingFullName;




