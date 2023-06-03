import { Product as ProductInterface } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Container } from './styles';

interface ProductProps {
  data: ProductInterface;
}

export function Product({ data }: ProductProps) {
  return (
    <Container>
      <div className="img-container">
        <img src={`http://localhost:3001/uploads/${data.product.imagePath}`} />
      </div>

      <div className="order-details">
        <span>{data.product.name}</span>
        <small>{formatCurrency(data.product.price)}</small>
      </div>

      <span>x {data.quantity}</span>
    </Container>
  );
}
