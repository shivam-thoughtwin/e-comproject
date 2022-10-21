import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/product-cart.css';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';




const ProductCart = ({item}) => {

    const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            imgUrl: item.imgUrl,
            price: item.price,
            // quantity: 1,
            // totalPrice: item.price
        })
        );
        toast.success("Product Added to the cart");
    }

    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className='product__item'>
                <motion.div whileHover={{ scale: 0.9 }}  className="product__img">
                    <img src={item.imgUrl} alt="productImg" />
                </motion.div>
                <div className="p-2 product__info">
                    <h3 className="product__name"><NavLink to={`/shop/${item.id}`}>{item.productName}</NavLink>
                    </h3>
                    <span>{item.category}</span>
                </div>
                <div className="product_card_bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">₹ {item.price}</span>
                    <motion.span whileTap={{scale: 1.2}} onClick={addToCart}><i class="ri-add-line"></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCart