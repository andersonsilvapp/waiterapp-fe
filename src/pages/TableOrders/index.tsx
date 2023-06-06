import { Orders } from '../../components/Orders';
import { Container } from './styles';

export function TableOrders() {
  return (
    <Container>
      <h1>Order Details</h1>

      <Orders />
    </Container>
  );
}
