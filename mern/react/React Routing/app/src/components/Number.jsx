import React from 'react'
import { useParams } from "react-router";


const Number = (props) => {
    const {word} = useParams();
  return (
   (isNaN (word))?<h1> The word is: { word }!</h1>:<h1>The number is : {word}</h1>
    )
  }

export default Number



