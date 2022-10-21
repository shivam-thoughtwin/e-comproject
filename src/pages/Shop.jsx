import React, { useState } from 'react';
import Helmat from '../components/Helmat/Helmat';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';

const Shop = () => {

  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {

    const filterValue = e.target.value

    if (filterValue === 'sofa') {

      const filteredProduct = products.filter((item) => item.category === 'sofa');
      setProductsData(filteredProduct);

    } else if (filterValue === 'mobile') {

      const filteredProduct = products.filter((item) => item.category === 'mobile');
      setProductsData(filteredProduct);

    } else if (filterValue === 'chair') {

      const filteredProduct = products.filter((item) => item.category === 'chair');
      setProductsData(filteredProduct);

    } else if (filterValue === 'watch') {

      const filteredProduct = products.filter((item) => item.category === 'watch');
      setProductsData(filteredProduct);

    } else if (filterValue === 'wireless') {

      const filteredProduct = products.filter((item) => item.category === 'wireless');
      setProductsData(filteredProduct);

    } else {
      setProductsData(products);
    }
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value

    const searchProduct = products.filter((item) => item.productName.toLowerCase().includes(searchTerm));
    setProductsData(searchProduct)
  }

  const handleRefresh = (e) => {
    setProductsData(products);
  }

  return <Helmat title={'Shop'}>
    <CommonSection title='Products' />

    <section>
      <Container>
        <Row>
          <Col lg='3' md='4'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter by Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>

          <Col lg='3' md='3'>
            <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>

          <Col lg='5' md='5'>
            <div className="search__box">
              <input onChange={handleSearch} name='searchProduct' type="text" placeholder='search.....' />
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>

          <Col lg='1' md='1' className='d-flex align-items-center justify-content-center'>
            <button onClick={handleRefresh} style={{ border: 'none', background: '#fff' }}>
              <i className="ri-refresh-line" data-toggle="tooltip" data-placement="top" title="Clear All"></i>
            </button>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length === 0 ?
              <h1 className='text-center'>No Products are found!</h1>
              :
              <ProductList data={productsData} />

          }
        </Row>
      </Container>
    </section>
  </Helmat>
}

export default Shop