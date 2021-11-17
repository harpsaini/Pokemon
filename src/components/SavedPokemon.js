
import firebase from "../firebase"
import { getDatabase,ref, onValue } from 'firebase/database';
import { useState, useEffect } from "react";
import Pokemon from "./Pokemons";

const SavedPokemon = () => {
  const [pokemonObjInFirebase, setPokemonObjInFirebase] = useState([]);
  const database = getDatabase(firebase);
  const dbRef = ref(database);

  useEffect(()=>{
    onValue(dbRef, (snapshot) => {
      const myData = snapshot.val();  
      const newArray = [];      
      for(let individualPokemon in myData)
      {
        newArray.push(myData[individualPokemon])   
      }
      setPokemonObjInFirebase(newArray)
    })
  },[dbRef])
  
 return(
  <ul className="flexContainer" > 
    { 
    pokemonObjInFirebase.map((individualPokemon,index)=>{
      return (  
        <li className="card" key={index}>
          <Pokemon pokemonObject={individualPokemon}/>
        </li> 
        )
      }) 
    }
  </ul>
 )}

export default SavedPokemon