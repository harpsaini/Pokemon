// takes in user selected option to make an api call to get pokemons of the type and makes another api call to get information about each pokemon. 

import React, { useState, useEffect, useRef} from "react";
import axios from "axios";
import firebase from '../firebase';
import { getDatabase,ref, push} from 'firebase/database';


const PokemonList = (props) =>{
  const database = getDatabase(firebase);
  const dbRef = ref(database);// firebase reference 
  const initialRender = useRef(true);

  const [Pokemons,setPokemon] = useState([]); 
  const [finalApiRes, setFinalApiRes] = useState([]);
  
    useEffect(()=>{
      if (initialRender.current){
        initialRender.current= false
      } else {
        fetch( `https://pokeapi.co/api/v2/type/${props.selectedInput}`)
        .then((res)=>res.json())
        .then((jsonData)=>{
        setPokemon(jsonData.pokemon)
        });
      }
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
          newArray.push(res.data)
         setFinalApiRes([...newArray])
        })    
        return newArray
      })
  },[Pokemons]) 

  const handleCatchingPokemon = (e) => {
    alert("captured")
    push(dbRef, finalApiRes[e.target.value] )
  }

  return(
    <>
      <ul className="flexContainer"> 
        { 
        finalApiRes.map((individualPokemon,index)=>{
          return (  
            <li className="card" key={index}>
              <img src={individualPokemon.sprites.front_default} alt={individualPokemon.name}/>
              <p>{individualPokemon.name}</p>
              <button value={index} onClick={handleCatchingPokemon} >+</button>
            </li> 
            )
          })
        } 
      </ul>
    </>
  )
}

export default PokemonList;

