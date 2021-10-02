import { useEffect,useState } from "react"
import axios from "axios";
import './App.css';


const Pokemon = (props) =>{
  
const [image, setImage] = useState();
const [type, setType] = useState();
useEffect(()=>{
  axios({
    url:props.url,
    method:"GET",
    dataResponse:"json",
  }).then((response)=>{
    // console.log(response);
    setImage(response.data.sprites.front_default);
    setType(response.data.types)
  })
},[props])  
// console.log(type);
  return(
      <div className="card">
        <img src={image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
  )
}

export default Pokemon;

// this will take the url and make another fetch call to Pokemon endpoint 
// 

// returned data has a type value 
// display only if the display value matches what the user clicked on the second list. 

