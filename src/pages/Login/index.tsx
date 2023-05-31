import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import illustration from '../../assets/images/illustration.png';
import { api } from '../../utils/api';

import { Input } from './components/Input';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await api.post('/auth/login', formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container>
        <div className="left-side">
          <div className="img-container">
            <img src={illustration} />
          </div>
        </div>
        <div className="right-side">
          <div className="title">
            <span>Login to your account</span>
            <h1>Welcome back!</h1>
          </div>

          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Email Address"
              icon="email"
              name="email"
              onChange={handleChange}
            />
            <Input
              placeholder="Password"
              icon="password"
              name="password"
              onChange={handleChange}
            />

            <Button type="submit">Login</Button>
          </Form>
        </div>
      </Container>
    </>
  );
}
