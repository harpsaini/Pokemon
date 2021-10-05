import { useEffect,useState } from "react"
import axios from "axios";
import './App.css';


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
  <div className="card">
    <img src={image} alt={name} />
    <h2>{name}</h2>
  </div>
  )
}

export default Pokemon;

// this will take the url and make another fetch call to Pokemon endpoint 
// 


