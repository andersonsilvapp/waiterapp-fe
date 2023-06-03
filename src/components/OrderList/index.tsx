import { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';

import { OrderCard } from '../OrderCard';
import { Container } from './styles';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';

export function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('orders@new', (order) => {
      setOrders((prevState) => prevState.concat(order));
      console.log(order);
    });

    return () => {
      socket.off();
    };
  }, []);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter(
    (order) => order.status === 'IN_PRODUCTION'
  );
  const done = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  }
  return (
    <Container>
      {orders.map((order) => (
        <OrderCard key={order._id} data={order} />
      ))}
    </Container>
  );
}
