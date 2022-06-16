import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const [cat,setCat] = useState("");
    const [id,setId]= useState("");
    const history = useHistory();


    const sendSurvey = (e) => {
        e.preventDefault();
       
        history.push("/${cat}/${id}");
      }
  return (
    <form onSubmit={ sendSurvey }>
    <label>search for:</label>
    <select onChange={e=>setCat(e.target.value)} value={cat}>
  <option value="people">People</option>
  <option value="planet">Planet</option>
</select>
    <label>ID:</label>
<input type="number" onChange={ e=> setId (e.target.value)}value={id}/>
<button>Search</button>
  </form>
  )
}

export default Main