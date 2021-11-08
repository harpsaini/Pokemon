import {useState} from 'react'
import PokemonList from './PokemonList';

function Search (){
  const [formInput, setFormInput]=useState()
  
  function handleClick (event){  
    setFormInput(event.target.value);
  }

  function createInputs(props){
    return(
      <>
        <label htmlFor={props}>{props}</label>
        <input type="checkbox" id={props} name="pokemonType" value={props} onClick={handleClick}/>
      </>
    )
  }
  
  return(
   <form>
     <ul>
      { <li>{createInputs('water')}</li>}
      { <li>{createInputs('fire')}</li>}
      { <li>{createInputs('electric ')}</li>}
      { <li>{createInputs('rock')}</li>}
     </ul>
     <ul>
      { <li>{createInputs('poison')}</li>}
      { <li>{createInputs('fighting')}</li>}
      { <li>{createInputs('flying ')}</li>}
      { <li>{createInputs('psychic')}</li>}
     </ul>
     {
       <PokemonList
        selectedInput = {formInput}
       /> 
     }
   </form>   
)}

export default Search

// need to capture both values and pass to pokemons for comparison before render.
