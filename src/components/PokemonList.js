// takes in user selected option to make an api call to get pokemons of the type and makes another api call to get information about each pokemon. 

import React, { useState, useEffect} from "react";
import Pokemon from "./Pokemons";
import axios from "axios";
import {Link} from 'react-router-dom'

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
        return newArray
      })
  },[Pokemons]) 

  return(
    <>
      <ul className="flexContainer" > 
        { 
        finalApiRes.map((individualPokemon,index)=>{
          return (  
            <li key={index}>
              <Link className="links" to={`/pokemon/${individualPokemon.name}`}>
                <Pokemon            
                  pokemonObject = {individualPokemon}
                  />
              </Link>
            </li> 
            )
          }) 
        }
      </ul>
    </>
  )
}

export default PokemonList;

