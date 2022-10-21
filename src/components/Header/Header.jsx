import React, {useRef, useEffect} from 'react';
import './header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';
import user_icon from '../../assets/images/user-icon.png'
import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();

  const nav__link = [
    {
      path: '/home',
      display: 'Home'
    },
    {
      path: '/shop',
      display: 'Shop'
    },
    {
      path: '/cart',
      display: 'Cart'
    }
  ];

  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header');
      }else{
        headerRef.current.classList.remove('sticky__header');
      }
    })
  }

  const navigateToCart = () => {
    navigate('/cart');
  }

  useEffect(() =>{
    stickyHeaderFunc();

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className='nav__wrapper'>
          <div className="logo">
            <img src={logo} alt="logo" />
            <div>
              <NavLink to='/home'><h1>Multimart</h1></NavLink>
            </div>
          </div>

          <div className="navigation">
            <ul className="menu">
              {
                nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''} >{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="nav__icons">
            <span className='fav__icon'>
              <i class="ri-heart-line"></i>
              <span className="badge">0</span>
            </span>
            <span onClick={navigateToCart} className='cart__icon'>
              <i class="ri-shopping-cart-fill"></i>
              <span className="badge">{totalQuantity}</span>
            </span>
            <span><img src={user_icon} alt='user' /></span>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line"></i>
            </span>
          </div>

        </div>
      </Row>
    </Container>
  </header>
}

export default Header