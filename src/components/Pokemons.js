
import '../App.css';
// import {Link} from 'react-router-dom'

const Pokemon = ({pokemonObject}) =>{

  return( 
        <div className="card">
          <img src={pokemonObject.sprites.front_default} alt={pokemonObject.name} />
          <p>{pokemonObject.name}</p>
        </div>   
  )
}

export default Pokemon;




