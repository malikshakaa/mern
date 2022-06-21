import React from 'react'
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import DeleteButton from './DeleteButton';

    
const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    // const history =useHistory();
    return (
        <div>
            <h1>all products</h1>
            {props.productList.map( (product, i) =>
         
                <p key={i} ><Link to = {"/api/product/"+product._id}>{product.title}</Link>
                      ||
                      <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button></p>
                
            )}
        </div>
    )
}
    
export default ProductList;
