import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { readObject } from '../helpers';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    if (readObject('token', null)) {
      history.push('/meals');
    }
  }, [history]);

  return (
    <>
      <h1>Bem vindo ao One Click Recipes</h1>
      <button><Link to="login">Login</Link></button>
      <button><Link to="cadastro">Cadastrar-se</Link></button>
    </>
  );
}
