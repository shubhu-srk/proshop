
import {Row , Col} from 'react-bootstrap';

import Product from '../components/Product';
import { useSearchParams } from 'react-router-dom';

//import {useEffect, useState} from 'react'
//import axios from 'axios';

import { useGetProductsQuery} from '../slices/productsApiSlice';
const Homescreen = () => {
  //const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
        {/* <h1>Latest Products</h1>
        <Row>
            { products.map((product) => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            )) }
        </Row> */}

        {/* PR-29:Products API Slice and get Products Endpoint */}
        {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}

    </>
  )
}

export default Homescreen
