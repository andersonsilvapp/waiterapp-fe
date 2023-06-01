import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../hooks/useAuthContext';

import illustration from '../../assets/images/illustration.png';

import { Input } from './components/Input';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { authenticated, signIn } = useAuthContext();
  const navigate = useNavigate();

  const buttonDisabled = !formData.email || !formData.password;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await signIn(formData);
  }

  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, [authenticated]);

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
              type="text"
              onChange={handleChange}
              value={formData.email}
            />
            <Input
              placeholder="Password"
              icon="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={formData.password}
            />

            <Button type="submit" disabled={buttonDisabled}>
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}
