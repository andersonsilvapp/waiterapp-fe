import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { ProductsTable } from '../../components/ProductsTable';
import { Container, Header } from './styles';
import { api } from '../../utils/api';
import { Product } from '../../types/Product';

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setProducts(data);
    });
  }, []);

  console.log(products);

  return (
    <Container>
      <Header>
        <h1>Product</h1>

        <div className="search">
          <input type="text" placeholder="Search here" />
          <button>
            <Icon type="search" />
          </button>
        </div>

        <div className="button-container">
          <Button size="small">
            <small>+ Add Product</small>
          </Button>
        </div>
      </Header>
      <ProductsTable products={products} />
    </Container>
  );
}
