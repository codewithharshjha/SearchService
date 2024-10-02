import React, { useContext, useState } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {

  const [currentCategory, setCurrentCategory] = useState('')

  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay  setCurrentCategory={setCurrentCategory} product={product}/>
      <DescriptionBox/>
      <RelatedProducts currentCategory={currentCategory} products = {products}/>
    </div>
  )
}

export default Product
