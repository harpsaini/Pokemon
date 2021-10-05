import {useState} from 'react'
import PokemonList from './PokemonList';

function Search (){
  const [formInput, setFormInput]=useState()
  
  function handleClick (event){  
    setFormInput(event.target.value);
  }
  
  return(
   <form>
     <ul >
     <li>
       <label htmlFor="water">water</label>
       <input type="checkbox" id="water" name="pokemonType" value="water" onClick={handleClick}/>
     </li>

     <li>
       <label htmlFor="fire">fire</label>
       <input type="checkbox" id="fire" name="pokemonType" value="fire" onClick={handleClick} />
     </li>
     <li>
       <label htmlFor="electric">electric</label>
       <input type="checkbox" id="electric" name="pokemonType" value="electric" onClick={handleClick}/>
     </li>
     <li>
       <label htmlFor="rock">rock</label>
       <input type="checkbox" id="rock" name="pokemonType" value="rock" onClick={handleClick}/>
     </li>
     </ul>
     <ul>
     <li>
       <label htmlFor="poison">poison</label>
       <input type="checkbox" id="poison" name="pokemonType" value="poison" onClick={handleClick}/>
     </li>
     <li>
       <label htmlFor="fighting">fighting</label>
       <input type="checkbox" id="fighting" name="pokemonType" value="fighting" onClick={handleClick}/>
     </li>
     <li>
       <label htmlFor="flying">flying</label>
       <input type="checkbox" id="flying" name="pokemonType" value="flying" onClick={handleClick}/>
     </li>
     <li>
       <label htmlFor="psychic">psychic</label>
       <input type="checkbox" id="psychic" name="pokemonType" value="psychic" onClick={handleClick}/>
     </li>
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
