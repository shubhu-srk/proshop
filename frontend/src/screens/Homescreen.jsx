import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";
import { useParams, useSearchParams } from "react-router-dom";

//import {useEffect, useState} from 'react'
//import axios from 'axios';

import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";


const Homescreen = () => {
  //const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);
  const { pageNumber } = useParams();
  console.log(pageNumber);
  const { data, isLoading, error } = useGetProductsQuery({pageNumber});
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
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
          pages = {data.pages}
          page = {data.page}
          />
         
        </>
      )}
    </>
  );
};

export default Homescreen;
