import React from 'react';

import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../Api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  const password = useForm();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key && login) {
      setLogin(login);
      setKey(key);
    }

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      })

      const { response } = await request(url, options)

      if (response.ok) navigate('/login')
    }
  }

  return (
    <div>
      <h1 className="title">Resetar senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Alterar senha</Button>}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
