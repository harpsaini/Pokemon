import Modal from "react-modal"
import { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import firebase from './firebase';
import { getDatabase,ref, push } from 'firebase/database';


const ModalComponent = () => {
  
  const {pokemonID} = useParams(); 
  const [ModalIsOpen, SetModalIsOpen]= useState(true);
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

  const handleModalClosing = () => {
    SetModalIsOpen(false)
  }
// this functions adds the pokemons list saved on firebase. 
  const handleCatchingPokemon = () => {
    push(dbRef, PokemonInfo);
    alert(`you caught ${pokemonID}, see saved pokemons`)
  }

  return(
    <Modal 
    isOpen={ModalIsOpen} 
    shouldCloseOnEsc={true}>
      <h2>Pokemon Info:{pokemonID}</h2>
      <p>new features coming shortly</p>
      <div onClick={handleModalClosing}>
        <Link to='/'>X</Link>
      </div>
        <button onClick={handleCatchingPokemon}>catch</button>
    </Modal>
  )
}

export default ModalComponent