import React from 'react'
import Product from './Product/Product';

const ProductList = ({product}) => {
  return (
    <div>
       {product.map((item, index) => {
            <Product key={index}/>
        })}
    </div>
  )
}

export default ProductList