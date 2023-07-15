import React, { useContext, useEffect } from 'react';
import ProductCard from './ProductCard'
import { ApiDataContext } from '../Context/ApiDataContext';

const ProductList = () => {
  const { apiData} = useContext(ApiDataContext);
  console.log(apiData)
  return (
    <div className='ProductList'>
      {
        apiData.map((product)=>{
          return(
            <ProductCard product={product} key={product.id}/>
          )
        })
      }
    </div>
  )
}

export default ProductList