import { ChangeEvent, FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../hooks/useAuthContext';

import illustration from '../../assets/images/illustration.png';

import { Input } from './components/Input';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuthContext();

  const from = location.state?.from.pathname || '/main';

  const buttonDisabled = !data.email || !data.password;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { email, password } = data;

    await signIn(email, password, () => navigate(from, { replace: true }));
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
              type="text"
              onChange={handleChange}
              value={data.email}
            />
            <Input
              placeholder="Password"
              icon="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={data.password}
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
