import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '../../components/Button';
import { Upload } from '../../components/Upload';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import { api } from '../../utils/api';
import { Category } from '../../types/Category';

import { Container, AddProduct, Form, Inputs, InputGroup } from './styles';
import { Loading } from '../../components/Loading';

interface ProductData {
  name: string;
  category: string;
  description: string;
  price: string;
}

interface IngredientData {
  name: string;
  icon: string;
}

export function CreateProduct() {
  const [isLoading, setIsLoading] = useState(true);

  const [categories, setCategories] = useState<Category[]>([]);

  const [image, setImage] = useState<File | null>(null);

  const [data, setData] = useState<ProductData>({
    name: '',
    category: '',
    description: '',
    price: '0',
  } as ProductData);

  const [tmpIngredient, setTmpIngredient] = useState({} as IngredientData);

  const [ingredients, setIngredients] = useState([] as IngredientData[]);

  const navigate = useNavigate();

  function handleChangeIngredientsInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setTmpIngredient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleAddIngredient() {
    if (tmpIngredient.name.trim() === '' || tmpIngredient.icon.trim() === '') {
      return alert('Preencha todos os campos');
    }

    setIngredients((prevState) => [...prevState, tmpIngredient]);

    setTmpIngredient({ name: '', icon: '' });
  }

  function getIngredientsName() {
    return ingredients
      .filter((ingredient) => ingredient.name !== '')
      .map((ingredient) => ingredient.name)
      .toString()
      .replaceAll(',', ', ');
  }

  function handleChangeImage(image: File | null) {
    setImage(image);
  }

  function handleInputChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function isAllFieldsFilled() {
    for (const prop in data) {
      if (data[prop as keyof ProductData].length === 0 || !image) {
        return true;
      }
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append('image', image!);
      formDataToSend.append('name', data.name);
      formDataToSend.append('category', data.category);
      formDataToSend.append('description', data.description);
      formDataToSend.append('price', data.price);

      if (ingredients.length > 0) {
        formDataToSend.append('ingredients', JSON.stringify(ingredients));
      }

      await api.post('/products', formDataToSend);

      toast.success(`${data.name} criado com sucesso!`);
      navigate('/products');
    } catch (error) {
      console.log(error);
      toast.error('Não foi possível criar o produto!');
    }
  }

  useEffect(() => {
    api
      .get('categories')
      .then(({ data }) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Não foi possível carregar as categorias');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} overlay />
      <Container>
        <header>
          <h1>Add Product</h1>
        </header>

        <AddProduct>
          <Form onSubmit={handleSubmit}>
            <Upload onChange={handleChangeImage} />
            <Inputs>
              <InputGroup>
                <label>Product Name</label>
                <Input
                  required
                  placeholder="Product Name"
                  name="name"
                  id="name"
                  onChange={handleInputChange}
                />
              </InputGroup>

              <InputGroup>
                <label>Category</label>
                <Select
                  required
                  name="category"
                  id="category"
                  onChange={handleInputChange}>
                  <option>Seleciona a categoria</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </InputGroup>

              <InputGroup>
                <label>Price</label>
                <Input
                  required
                  placeholder="Price"
                  type="number"
                  name="price"
                  id="price"
                  onChange={handleInputChange}
                  step=".01"
                />
              </InputGroup>

              <InputGroup>
                <label>Description</label>
                <Textarea
                  required
                  placeholder="Description"
                  name="description"
                  id="description"
                  onChange={handleInputChange}
                />
              </InputGroup>

              <InputGroup>
                <label>Ingredients</label>
                <Input
                  placeholder="Ingredients"
                  value={getIngredientsName()}
                  disabled
                />
              </InputGroup>

              <InputGroup>
                <label>Add ingredients</label>
                <div className="add-ingredients">
                  <Input
                    placeholder="Name"
                    name="name"
                    id="name"
                    value={tmpIngredient.name}
                    onChange={handleChangeIngredientsInput}
                    style={{ width: '50%', marginBottom: 12 }}
                  />
                  <Input
                    placeholder="Icon"
                    name="icon"
                    id="icon"
                    value={tmpIngredient.icon}
                    onChange={handleChangeIngredientsInput}
                    style={{ width: '50%' }}
                  />
                  <div className="add-container">
                    <Button
                      type="button"
                      onClick={handleAddIngredient}
                      disabled={!tmpIngredient.name || !tmpIngredient.icon}>
                      Add
                    </Button>
                  </div>
                </div>
              </InputGroup>
            </Inputs>
            <div className="button-container">
              <Button
                type="submit"
                color="green"
                disabled={isAllFieldsFilled()}>
                Save
              </Button>
            </div>
          </Form>
        </AddProduct>
      </Container>
    </>
  );
}
