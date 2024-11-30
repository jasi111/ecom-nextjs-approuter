import React from 'react'
import ProductCard from '../components/prodcut-card/ProductCard'
import { ProductsService } from '../services/products-service'
import Image from 'next/image'
// import FilterProducts from '../components/filterProducts/FilterProducts'
import Filter from '../components/filterProducts/Filter'


export default async function Products() {
    console.log('Products')
    var products = await ProductsService.getProducts();

  return (
    <div className="row gx-5 gy-3 mx-5 my-3">
    
        <h3 className="bg-blue text-light text-center py-2 mt-5">PRODUCTS</h3>
        <Filter/>
        
    </div>
  )
}