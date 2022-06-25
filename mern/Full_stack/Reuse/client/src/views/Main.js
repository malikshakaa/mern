import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import ProductList from '../components/ProductList';
export default (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
        .then(res=>{
            setProduct(res.data);
            setLoaded(true);
        })
        .catch(err=>console.error(err));
    },[product]);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    
   

    const createProduct=(product)=>{
    axios.post('http://localhost:8000/api/product', product)
            .then(res=>setProduct([...product,res.data]))
       
    }
    return (
        <div>
            <Form   onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" buttonClick="Create Product"/>
            <hr/>
            {loaded && <ProductList product={product}  removeFromDom={removeFromDom}/>}
        </div>
    )
}