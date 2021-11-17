import { useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import firebase from '../firebase';
import { getDatabase,ref, push } from 'firebase/database';

const ModalComponent = () => {
  const {pokemonID} = useParams(); 
  const [PokemonInfo, setPokemonInfo] = useState([]);
  
  const database = getDatabase(firebase);
  const dbRef = ref(database);

  useEffect(()=>{
    axios({
      url:`https://pokeapi.co/api/v2/pokemon/${pokemonID}` ,
    method:"GET",
    dataResponse:"json"
    }).then((res)=>{
      const response = res.data;
      setPokemonInfo(response)
    })
  },[pokemonID])

// this functions adds the pokemons list saved on firebase. 
  const handleCatchingPokemon = () => {
    push(dbRef, PokemonInfo);
    alert(`you caught ${pokemonID}, see saved pokemons`)
  }

  return(
    <div className="modalStyles">
      <h3>Pokemon Name :{PokemonInfo.name}</h3>
      {/* <img src={PokemonInfo.sprites.front_shiny} alt="" /> */}
      <div className="modalCloseButton">
        <Link to='/'>X</Link>
      </div>
      <button onClick={handleCatchingPokemon}>catch</button>
    </div>
  
  )
}

export default ModalComponent