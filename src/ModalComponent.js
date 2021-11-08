import Modal from "react-modal"
import { useState } from "react";
import { Link,useParams } from "react-router-dom";

const ModalComponent = () => {
  
  const {pokemonID} = useParams();
 
  const [ModalIsOpen, SetModalIsOpen]= useState(true);

  const handleModalClosing = () => {
    SetModalIsOpen(false)
  }

  const handleCatchingPokemon = () => {
    alert(`you caught ${pokemonID}`)
  }

  return(
    <Modal isOpen={ModalIsOpen} shouldCloseOnEsc={true}>
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