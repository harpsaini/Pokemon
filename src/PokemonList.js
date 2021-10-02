// takes in user selected option to make an api call to get the desired pokemon name and url 

//  url will be passed to Pokemons as props to make another api call 


import { useState, useEffect } from "react";
import Pokemon from "./Pokemons";


const PokemonList = (props) =>{
  const [displayPokemons,setDisplayPokemons] = useState([]);
      useEffect(()=>{
        fetch( `https://pokeapi.co/api/v2/type/${props.selectedInput}`)
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

