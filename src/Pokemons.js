
import './App.css';
import {Link} from 'react-router-dom'

const Pokemon = ({pokemonObject}) =>{

  return(
    <Link className="links" to={`/pokemon/${pokemonObject.name}`}>
      <div className="card">
        <img src={pokemonObject.sprites.front_default} alt={pokemonObject.name} />
        <p>{pokemonObject.name}</p>
      </div>
    </Link>
  )
}

export default Pokemon;




