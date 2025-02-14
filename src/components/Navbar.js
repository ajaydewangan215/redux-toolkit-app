import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const items = useSelector((state) => state.card)
  return (
    <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <span className='logo'>REDUX STORE</span>
      <div>
        <Link className="navLink" to='/'>Home</Link>
        <Link className="navLink" to='/cart'>Cart</Link>
        <span className='cartCount'>
          Cart Items:  {items.length}
        </span>
      </div>
    </div>
  )
}

export default Navbar