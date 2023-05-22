import {Link} from  'react-router-dom';

export default function Home() {
  return(
    <>
      <h1>Bem vindo ao One Click Recipes</h1>
      <button><Link to='user/login'>Login</Link></button>
      <button><Link to='user/cadastro'>Cadastrar-se</Link></button>
    </>
  );
}