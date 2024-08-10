import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products = useSelector(state => state.card)
  const dispatch = useDispatch()
  const handleRemove = id => {
    dispatch(remove(id))
  }
  return (
    <div>
      <h3>Card</h3>
      <div className="cartWrapper">
        {
          products.map(product => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => handleRemove(product.id)} className='btn'>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart