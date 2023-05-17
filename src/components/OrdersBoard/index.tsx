import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({ title, icon, orders }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      {orders.map((order) => (
        <OrdersContainer key={order._id}>
          <button type='button'>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} itens</span>
          </button>

        </OrdersContainer>

      ))}

    </Board>
  );
}
