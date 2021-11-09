import { useEffect,useState } from "react"
import axios from "axios";
import './App.css';
import {Link} from 'react-router-dom'

const Pokemon = ({name,url}) =>{

const [image, setImage] = useState();

useEffect(()=>{
  axios({
    url:url ,
    method:"GET",
    dataResponse:"json",
  }).then((response)=>{      
    setImage(response.data.sprites.front_default); 
    })    
},[url])  


  return(
    <Link className="links" to={`/pokemon/${name}`}>
      <div className="card">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default Pokemon;

// this will take the url and make another fetch call to Pokemon endpoint 
// 


