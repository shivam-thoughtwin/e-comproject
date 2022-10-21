import React, { useState, useEffect } from 'react';
import Helmat from '../components/Helmat/Helmat';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import { NavLink } from 'react-router-dom';
import Services from '../services/Services';
import '../styles/home.css';
import { motion } from 'framer-motion';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);

  const [bsetSalesProducts, setBsetSalesProducts] = useState([]);

  const [mobileProducts, setMobileProducts] = useState([]);

  const [wirelessProducts, setWirelessProducts] = useState([]);

  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {

    const filterdTrendingProducts = products.filter((item) => item.category === 'chair');
    const filterdSalesProducts = products.filter((item) => item.category === 'sofa');
    const filterdMobileProducts = products.filter((item) => item.category === 'mobile');
    const filterdWirelessProducts = products.filter((item) => item.category === 'wireless');
    const filterdPopularProducts = products.filter((item) => item.category === 'watch');


    setTrendingProducts(filterdTrendingProducts);
    setBsetSalesProducts(filterdSalesProducts);
    setMobileProducts(filterdMobileProducts);
    setWirelessProducts(filterdWirelessProducts);
    setPopularProducts(filterdPopularProducts)

  }, [])

  return <Helmat title={'Home'}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Tranding product in {year}</p>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate porro ipsam voluptas laudantium, ullam architecto distinctio fugiat nam ex earum explicabo omnis laboriosam tenetur, quas assumenda? Similique, reiciendis facilis.</p>
              <NavLink to='/shop'><motion.button whileHover={{ scale: 1.1 }} className="buy__btn">SHOP NOW</motion.button></NavLink>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="heroImg" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
    <Services />

    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center mt-5 mb-5'>
            <h2 className="section__title">
              Trending Products
            </h2>
          </Col>
          <ProductList data={trendingProducts} />
        </Row>
      </Container>
    </section>

    <section className="best__sales">
      <Container>
        <Row>
          <Col lg='12' className='text-center mt-5 mb-5'>
            <h2 className="section__title">
              Best Sales Products
            </h2>
          </Col>
          <ProductList data={bsetSalesProducts} />
        </Row>
      </Container>
    </section>

    <section className="timer_counter">
      <Container>
        <Row>
          <Col lg='6' md='6'>

            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>Quality armchir</h3>
            </div>

            <Clock />

            <button className="visit__btn">
              <NavLink to="/shop">
                Visit Sote
              </NavLink>
            </button>

          </Col>

          <Col lg='6' md='6' className='text-end'>
            <img src={counterImg} alt="" />
          </Col>

        </Row>
      </Container>
    </section>

    <section className="new_arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section_titles">New Arrivals</h2>
          </Col>
          <ProductList data={mobileProducts} />
          <ProductList data={wirelessProducts} />
        </Row>
      </Container>
    </section>


    <section className="popular__category">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section_titles">Popular in Category</h2>
          </Col>
          <ProductList data={popularProducts} />
        </Row>
      </Container>
    </section>

  </Helmat>
}

export default Home