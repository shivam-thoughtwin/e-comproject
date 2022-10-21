import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmat from '../components/Helmat/Helmat';
import CommonSection from '../components/UI/CommonSection';
import '../styles/product-details.css';
import ProductList from '../components/UI/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';



const ProductDetails = () => {

  const [tab, setTab] = useState('desc');

  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  
  const { id } = useParams();

  const product = products.find((item) => item.id === id);
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product

  const relatedProducts = products.filter((item) => item.category === category || item.id !== id);

  const submitHandler = (e) =>{
      e.preventDefault();

      const reviewUserName = reviewUser.current.value
      const reviewUserMsg = reviewMsg.current.value

      const reviewObj = {
        userName: reviewUserName,
        text: reviewUserMsg,
        rating,
      }

      console.log(reviewObj);
      toast.success('Product Review Added Succesfully!!');
  }

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      image: imgUrl,
      productName,
      price,
    })
    );
    toast.success('Product Added Succesfully!!');
  }

  useEffect(() =>{
    window.scroll(0,0)
  }, [product])

  return <Helmat title={productName}>
    <CommonSection title={productName} />

    <section>

      <Container className='pt-0'>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt={productName} />
          </Col>

          <Col lg='6'>
            <div className='product__details'>
              <h2>{productName}</h2>
              <div className="product__rating d-flex align-items-center gap-5 mb-3">
                <div>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-half-fill"></i></span>
                </div>
                <p>({avgRating}) Ratings</p>
              </div>
              <div className='d-flex align-items-cnter gap-5'>
              <span className='product__price'>₹ {price}</span>
              <span><strong>Category:</strong> {' '+category}</span>
              </div>
              <p className='product__decs'>{shortDesc}</p>
              <button onClick={addToCart} className='buy__btn'>Add to Cart</button>
            </div>
          </Col>
        </Row>
      </Container>

    </section>

    <section>

      <Container>
        <Row>
          <Col lg='12'>
            <div className="tab__wrapper d-flex align-items-center gap-5">
              <h6 onClick={() => setTab('desc')} className={`${tab === 'desc' ? 'active__tab' : ''}`}>Description</h6>
              <h6 onClick={() => setTab('rev')} className={`${tab === 'rev' ? 'active__tab' : ''}`}>Review ({reviews.length})</h6>
            </div>

            {
              tab === 'desc' ?
                <div className="tab__content mt-4">
                  <p>{description}</p>
                </div> :
                <div className='product__review mt-5'>
                  <div className="review__wrapper">
                    <ul>
                      {
                        reviews?.map((item, index) => (
                          <li key={index} className='mb-3'><span>{item.rating} (Rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>

                    <div className="review__form">

                      <h4>Leave Your Experience</h4>

                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input type="text" ref={reviewUser} placeholder='Enter Your Name' required />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5">
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(5)}>5<i class="ri-star-s-fill"></i></motion.span>
                        </div>

                        <div className="form__group">
                          <textarea ref={reviewMsg} type="text" rows='5' placeholder='Review Message.....' required></textarea>
                        </div>
                        <motion.button whileTap={{scale: 1.2}} type='submit' className='buy__btn'>Send</motion.button>
                      </form>

                    </div>

                  </div>
                </div>
            }

          </Col>
          

          <Col className='mt-5'>
            <h4 className='related__title'>You might also like</h4>
          </Col>
          <ProductList data={relatedProducts} />

        </Row>
      </Container>
    </section>

  </Helmat>
}

export default ProductDetails