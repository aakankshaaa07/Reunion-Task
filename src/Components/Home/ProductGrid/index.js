import React from 'react'
import ProductCard from './Product'
import './styles.css'

const ProductGrid = ({ list }) => (
  <div className="grid-wrap">
    {list.map((item) => (
      <ProductCard key={item.id} item={item} />
    ))}
  </div>
)

export default ProductGrid