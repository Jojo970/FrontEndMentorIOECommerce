import {useState} from 'react';
import {ReactComponent as Logo} from '../images/logo.svg';
import {ReactComponent as CartLogo} from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import './Navbar.css';
import Cart from './Cart';

const Navbar = () => {
  const [cartActive, setCartActive] = useState(false)

  const toggleCart = (e) => {
    e.preventDefault()
    if (cartActive) {
      setCartActive(false)
    } else { setCartActive(true)}
  }

  return (
    <nav>
      <div className='navLeft'>

      <a href = '#'><Logo/></a>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
      <div className='navRight'>
        <button onClick={toggleCart} className='cart'><CartLogo/></button>
        {cartActive ? (<Cart/>) : (<></>)}
        <img className='avatar' src={avatar}></img>
      </div>
    </nav>
  )
}

export default Navbar