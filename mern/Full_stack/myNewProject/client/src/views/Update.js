import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useHistory } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const history = useHistory(); 
    useEffect(() => {
        axios.put('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc)
            })
    }, [id]);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,desc
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
            history.push("/");
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="desc"
                    value={desc} 
                    onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;