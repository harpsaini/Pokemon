import { useEffect,useState } from "react"
import axios from "axios";
import './App.css';


const Pokemon = (props) =>{
  
const [image, setImage] = useState();
  axios({
    url:props.url,
    method:"GET",
    dataResponse:"json",
  }).then((response)=>{
    setImage(response.data.sprites.front_default);
  })

  return(
      <div className="card">
        <img src={image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
  )
}

export default Pokemon;

// this will take the url and make another fetch call to Pokemon endpoint 
// display image 