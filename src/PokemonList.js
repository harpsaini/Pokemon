// takes in user selected option to make an api call to get the desired pokemon name and url 

//  url will be passed to Pokemons as props to make another api call 

import { useState, useEffect } from "react";
import Pokemon from "./Pokemons";


const PokemonList = (props) =>{
  const [Pokemons,setPokemon] = useState([]); 
  const [filteredPokemon, setFilteredPokemon] = useState([])
  // setFilteredPokemon({...Pokemons})
    useEffect(()=>{
      fetch( `https://pokeapi.co/api/v2/type/${props.selectedInput}`)
      .then((res)=>res.json())
      .then((jsonData)=>{
      setPokemon(jsonData.pokemon)
      });
    },[props]);  // dependecy array is watches the changes to the props as a result of user selection change. 

  
      // this will update the state after filtering the array where url is the one returned from event below. 
      const handleCatchingPokemon= (event)=>{
        let caughtPokimon = event.target.alt
        let test = Pokemons.filter((pokemon)=>{
          return caughtPokimon === pokemon.pokemon.name
          
        })
        console.log(test)
        setFilteredPokemon(test)
    }
    console.log(filteredPokemon);
  return(
    <div className="flexContainer" > 
      {
        Pokemons.map((individualPokemon,index)=>{
          return (  
            <div key={index} onClick={handleCatchingPokemon}>
               <Pokemon                        
                name={individualPokemon.pokemon.name}  
                url={individualPokemon.pokemon.url}
                />
            </div>
          )
        })
      }
    </div>
  )
}

export default PokemonList;

// create a second state which will comtain the list of the filtered pokemon using filter 
// map through the second array to display pokemons, 


// need to remove the card from the pokemons array when the card is clicked,. 