import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row ,Col} from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

const ProductListScreen = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  console.log(products);

  const deleteHandler=(id)=>{
    console.log("delete",id);
  }
  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-end'>
          <Button className='my-3' >
            <FaPlus /> Create Product
          </Button>
        </Col>
      </Row>
      
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={()=>deleteHandler(product._id)}
                    >
                      <FaTrash style={{ color: 'white' }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* PAGINATE PLACEHOLDER */}
        </>
      )}
    </>
  );
};
export default ProductListScreen;
