import React , {useState,useEffect} from 'react'
import { useParams } from "react-router";
// import axios from 'axios'

const People = (props) => {
  const [ peoples,setPeoples] = useState([])
    const { people } = useParams();


  //   useEffect(()=>{
  //     axios.get('https://swapi.dev/api/people/${people}')
  //         .then(response=>{setResponseData(response.data)})
  // }, [people]); 
  return (
    <div>
      <h1>{peoples.name}</h1>
      <p>{peoples.height}</p>
      <p>{peoples.mass}</p>
      <p>{peoples.hair_color}</p> 
      
    </div>
  )
}

export default People