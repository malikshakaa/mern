import React from 'react'
import { useParams } from "react-router";

const Colors = (props) => {
  const {word} = useParams();
  const {color1}=useParams();
  const {color2}=useParams();
return (
 (isNaN (word))?<h1 style={{color:color1,backgroundColor:color2}}> The word is: { word }!</h1>:<h1 style={{color:color1,backgroundColor:color2}}>The number is : {word}</h1>
  )
}


export default Colors