import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/ProductList';
    
export default  (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
                console.log(res.data)
            })
            .catch(err => console.error(err));
    },[product]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    
    return (
        <div>
           <Form/>
           <hr/>
           {loaded && <ProductList productList={product} removeFromDom={removeFromDom}/>} 
        </div>
    )
}
    
