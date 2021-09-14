import './App.css';
import Pokedex from './PokeCard';
import data from './data';
import PokemonList from './PokemonList';

function App() {
  return (
    <div className="App">
      <PokemonList pokecards={data} />
    </div>
  ); 
}

export default App;
