import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/orderApiSlice';
const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  console.log(orders);
  return (
    <div>
      OrderListScreen
    </div>
  )
}

export default OrderListScreen
