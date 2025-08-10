import React from 'react'
import { useParams } from 'react-router-dom'
import { cardData } from '../../data/card'

const ProductDetails = () => {
  const { id } = useParams();

  const item = cardData.find(item => item.id === parseInt(id));
    
  if (!item) {
    return <div className="container">Loading...</div>;
  }

  return (
   <>
   <div className='container'>
    <div className='image-box' style={{marginBottom: "20px"}}>
      <img src={item.image} alt={item.title} />
    </div>
    <div className='content-box'>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{`₹ ${item.price}`}</p>
      <p>{`${item.rating} ⭐`}</p>
    </div>
   </div>
   </>
  )
}

export default ProductDetails