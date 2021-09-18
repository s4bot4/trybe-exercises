import React from "react";
import pokemons from "./data";

class Pokedex extends React.Component {
    render() {
       const { name, type, averageWeight, image  } = this.props.poke;
  
      return (
        <div>
          <p> { name } <br /> { type } </p>
          < img src={ image } alt={ `Pokemon ${name}` }></img>
          <p> { `${averageWeight.value } ${averageWeight.measurementUnit}` }</p>
        </div>
      );
    }
  }
  
  export default Pokedex;