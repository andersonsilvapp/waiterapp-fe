import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { ProductsTable } from '../../components/ProductsTable';

import { api } from '../../utils/api';
import { Product } from '../../types/Product';

import { Container, Header } from './styles';
import { Loading } from '../../components/Loading';
import { toast } from 'react-toastify';

export function Products() {
  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/products')
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Não foi possível carregar os produtos');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} overlay />
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
            <Button size="small" onClick={() => navigate('create')}>
              <small>+ Add Product</small>
            </Button>
          </div>
        </Header>
        <ProductsTable products={products} />
      </Container>
    </>
  );
}
