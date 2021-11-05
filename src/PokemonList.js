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
  // console.log(Pokemons)

      // this will update the state after filtering the array using name as parameter 
    const handleCatchingPokemon= (event)=>{
      const caughtPokemon = event.target.alt;
      const arrayofcaughtPokemons = Pokemons.filter((pokemon)=>{
        return caughtPokemon !== pokemon.pokemon.name
      })

      // removes the card from the pokemons array when the card is clicked,. 
      setPokemon(arrayofcaughtPokemons)
      alert(`you caught ${caughtPokemon}`)
    }
   
  return(
    <div className="flexContainer" > 
      { 
      //mapping over the array here to pass url to Pokemon for second api call. 
        Pokemons.map((individualPokemon,index)=>{
          console.log("this is the full list")
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

