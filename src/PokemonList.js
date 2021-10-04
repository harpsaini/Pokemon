// takes in user selected option to make an api call to get the desired pokemon name and url 

//  url will be passed to Pokemons as props to make another api call 

import { useState, useEffect } from "react";
import Pokemon from "./Pokemons";


const PokemonList = (props) =>{
  const [displayPokemons,setDisplayPokemons] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([])

  
      useEffect(()=>{
        let firstUserInput = props.selectedInput;
        console.log(firstUserInput);
        fetch( `https://pokeapi.co/api/v2/type/${firstUserInput}`)
       .then((res)=>res.json())
       .then((jsonData)=>{
        setDisplayPokemons(jsonData.pokemon)
        });
      },[props]);  

  return(
   <div className="flexContainer">
    {
      displayPokemons.map((individualPokemon,index)=>{
        return (  
         <Pokemon
         key= {index}
         name={individualPokemon.pokemon.name}
         url={individualPokemon.pokemon.url}/>
        )
      })
    }  
   </div>
  )
}

export default PokemonList;

// create a second state which will comtain the list of the filtered pokemon using filter 
// map through the second array to display pokemons, 
