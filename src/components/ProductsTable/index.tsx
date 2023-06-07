import { Product as ProductType } from '../../types/Product';
import { Product } from '../Product';

import { Container } from './styles';

interface ProductsTableProps {
  products: ProductType[];
}

export function ProductsTable({ products }: ProductsTableProps) {
  return (
    <Container>
      <thead>
        <tr>
          <th>Product</th>
          <th>Product ID</th>
          <th>QTD</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </tbody>
    </Container>
  );
}
