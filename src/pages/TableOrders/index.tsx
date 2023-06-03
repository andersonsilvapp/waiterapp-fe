import { OrderList } from '../../components/OrderList';
import { Container } from './styles';

export function TableOrders() {
  return (
    <Container>
      <h1>Order Details</h1>
      <OrderList />
    </Container>
  );
}
