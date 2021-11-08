// takes in user selected option to make an api call to get the desired pokemon name and url 

//  url will be passed to Pokemons as props to make another api call 

import { useState, useEffect } from "react";
import Pokemon from "./Pokemons";


const PokemonList = (props) =>{
  const [Pokemons,setPokemon] = useState([]); 
    useEffect(()=>{
      fetch( `https://pokeapi.co/api/v2/type/${props.selectedInput}`)
      .then((res)=>res.json())
      .then((jsonData)=>{
      setPokemon(jsonData.pokemon)
      });
    },[props]);  // dependecy array is watches the changes to the props as a result of user selection change. 
   
  return(
    <ul className="flexContainer" > 
      { 
      //mapping over the array here to pass url to Pokemon for second api call. 
        Pokemons.map((individualPokemon,index)=>{
          return (  
              <li key={index}>
                  <Pokemon                        
                  name={individualPokemon.pokemon.name}  
                  url={individualPokemon.pokemon.url}
                  />
              </li> 
          )
        }) 
      }
    </ul>
  )
}

export default PokemonList;

