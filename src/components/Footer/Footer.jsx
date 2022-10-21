import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


const Footer = () => {

  const year = new Date().getFullYear();

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4'>
        <div className="logo">
            <div>
              <NavLink to='/home'><h1 className='text-white'>Multimart</h1></NavLink>
            </div>
          </div>
          <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ex reiciendis quod ad unde ut provident sint iusto, enim animi.
            </p>
        </Col>

        <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title text-white">Top Categories</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <NavLink to="#">Mobile Phones</NavLink>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <NavLink to="#">Modern Sofa's</NavLink>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <NavLink to="#">Arm Chairs</NavLink>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <NavLink to="#">Smart Watches</NavLink>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>

        <Col lg='2'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title text-white">Useful Links</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <NavLink to="/shop">Shop</NavLink>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <NavLink to="/cart">Cart</NavLink>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <NavLink to="/login">Login</NavLink>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <NavLink to="#">Privacy Policy</NavLink>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>

        <Col lg='3'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title text-white">Contact</h4>
            <ListGroup className='mb-3 footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line text-white"></i></span>
                <p>Lorem ipsum dolor sit amet.</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line text-white"></i></span>
                <p>+91 1234567897</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line text-white"></i></span>
                <p>demoemail@gmail.com</p>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg='12' className='text-center'>
          <p className="footer__copyright">
              Copyright {year} developed by Shivam Pandey 
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer