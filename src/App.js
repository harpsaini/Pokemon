
import './App.css';
import Search from './Search';

function App() {
  return (
  <div className="App">
    <h1>Pokemon</h1>
    <Search/>
  </div>
  )
}

export default App;

// MVP

// Need a form component to take in user input and pass the information to "PokemonList"
  //update dom with the pokemons after the GET POKIMON button is clicked

//  create a stateful component 'PokemonList' that takes in user input and queries the api. This component will render returned data from the api response. 

// create a Card component which will get an image and name using props from pokemonlist. 


// Stretch goals

// take multiple input values to further sort Pokemons based on Type. 
// Ability to catch pokemons. 

