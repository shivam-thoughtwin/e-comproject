import React from 'react';
import Helmat from '../components/Helmat/Helmat';
import '../styles/cart.css';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import tdImg from '../assets/images/arm-chair-01.jpg';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItem);

  console.log(cartItems)

  return <Helmat title={'Cart'}>
    <CommonSection title="Shopping Cart" />
    <section>
      <Container>
        <Row>
          <Col lg='9'>

            {
              cartItems.length === 0 ? <h2>No Item Added to Cart</h2>
                :
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qut</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems.map((item, index) => (
                        <tr key={index}>
                          <td><img style={{width:'115px !important'}} src={item.imgUrl} alt="" /></td>
                          <td>{item.productName}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td><i class="ri-delete-bin-line"></i></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
            }

          </Col>

          <Col lg='3'></Col>
        </Row>
      </Container>
    </section>
  </Helmat>
}

export default Cart