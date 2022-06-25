import React, { useState } from 'react'
export default (props) => {
    //keep track of what is being typed via useState hook
    const { buttonClick,initialTitle, initialPrice,initialDesc, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [desc, setDesc] = useState(initialDesc);
    const [button,setButton]=useState(buttonClick);
    

    const onSubmitHandler = e => {
           e.preventDefault();
        onSubmitProp({title, price,desc});
            clearStateForForm()
    }
    const clearStateForForm=()=>{
        setTitle("");
        setPrice("");
        setDesc("");

    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <input type="submit" value={button}/>
        </form>
    )
}

