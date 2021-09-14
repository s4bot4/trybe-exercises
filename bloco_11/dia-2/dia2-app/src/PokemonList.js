import React from "react";
import Pokedex from "./PokeCard";


class PokemonList extends React.Component {

    render() {
        const { pokecards } = this.props;

        return ( 
          <div>
              {pokecards.map((item) => <Pokedex key={item.id} poke={item}/>)}
          </div>

        )
    }
}
export default PokemonList;