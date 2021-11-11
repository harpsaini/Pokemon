// takes in user selected option to make an api call to get the desired pokemon name and url 

import { useState, useEffect } from "react";
import Pokemon from "./Pokemons";
import axios from "axios";


const PokemonList = (props) =>{
  const [Pokemons,setPokemon] = useState([]); 
  const [finalApiRes, setFinalApiRes] = useState([]);
  
    useEffect(()=>{
      fetch( `https://pokeapi.co/api/v2/type/${props.selectedInput}`)
      .then((res)=>res.json())
      .then((jsonData)=>{
      setPokemon(jsonData.pokemon)
      });
    },[props]);  // dependecy array is watches the changes to the props as a result of user selection change. 
   
    useEffect(()=>{
    const newArray = [];
    Pokemons.map((individualPokemon)=>{
      const url = individualPokemon.pokemon.url;
      axios({
        url:url ,
        method:"GET",
        dataResponse:"json",
      }).then((res)=>{      
        // setImage(response.data.sprites.front_default); 
        newArray.push(res.data)
        setFinalApiRes([...newArray])
      })    
    })
  },[Pokemons]) 
  
  return(
    <ul className="flexContainer" > 
      { 
      finalApiRes.map((individualPokemon,index)=>{
          return (  
              <li key={index}>
                  <Pokemon            
                    pokemonObject = {individualPokemon}
                  />
              </li> 
          )
        }) 
      }
    </ul>
  )
}

export default PokemonList;

