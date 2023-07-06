import { useNavigate } from 'react-router-dom';
import { Product as ProductInterface } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Icon } from '../Icon';
import { Container } from './styles';

interface ProductProps {
  product: ProductInterface;
}

export function Product({ product }: ProductProps) {
  const navigate = useNavigate();

  const productStatus = product.isActive ? (
    <span className="active">Ativo</span>
  ) : (
    <span className="inactive">Inativo</span>
  );

  function handleNavigateEditProduct(productId: string) {
    navigate(`edit/${productId}`);
  }

  return (
    <Container>
      <td>
        <div className="product-identification">
          <div className="img-container">
            <img src={`http://localhost:3001/uploads/${product.imagePath}`} />
          </div>
          <span>{product.name}</span>
        </div>
      </td>
      <td>{product._id}</td>
      <td>50</td>
      <td>{formatCurrency(product.price)}</td>
      <td>
        <span>{productStatus}</span>
      </td>
      <td>
        <div className="actions">
          <button
            type="button"
            onClick={() => handleNavigateEditProduct(product._id)}>
            <Icon type="edit" />
            <small className="edit">Edit</small>
          </button>
          <button type="button">
            <Icon type="trash" />
            <small className="delete">Delete</small>
          </button>
        </div>
      </td>
    </Container>
  );
}
