import Home from './Home';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import RickMorty from './Rick&Morty'
import About from './About'
import HowTo from './HowTo'
import Profile from './Profile'

function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={About} />
      <Route path="/howto" component={HowTo} />
      <Route path="/profile/:dog" render={(props) => <Profile {...props} name="DJ Sabota" />} />
      <Route exact path="/" component={Home} />
      <Route path="/rickmorty"><RickMorty /></Route>
    </BrowserRouter> 
  );
}

export default App;
