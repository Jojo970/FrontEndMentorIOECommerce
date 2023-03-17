import {useState} from 'react';
import './Cart.css'

const Cart = () => {
  const [cartEmpty, setCartEmpty] = useState(false)

  return (
    <div className='cartModal'>
      <nav>
        <p><b>Cart</b></p>
      </nav>
      {cartEmpty ? (
        <div></div>
      ) :
      (
      <div>
        <p>Your cart is empty.</p>
      </div>
      )
    }
    </div>
  )
}

export default Cart