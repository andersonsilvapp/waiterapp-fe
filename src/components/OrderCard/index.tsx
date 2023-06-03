import { Order } from '../../types/Order';
import { Button } from '../Button';
import { Product } from '../Product';
import { Container, OrderItems } from './styles';

interface OrderCardProps {
  data: Order;
}

export function OrderCard({ data }: OrderCardProps) {
  return (
    <Container>
      <header>
        <span>Mesa {data.table}</span>
        <small>Order #100 </small>
      </header>

      <OrderItems>
        <span>{data.products.length} Itens</span>
      </OrderItems>

      <footer>
        <div className="button-container">
          <Button color="red">Cancel</Button>
        </div>
        <div className="button-container">
          <Button>Details</Button>
        </div>
      </footer>
    </Container>
  );
}
