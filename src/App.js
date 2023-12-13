
import './App.css';
import OpcoesHeader from './componentes/OpcoesHeader';
import Logo from './componentes/Logo';
import perfilImg from './imagens/perfil.svg'
import sacolaImg from './imagens/sacola.svg'

const icones = [perfilImg, sacolaImg]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>        

        <ul className ="icones">
          {icones.map((imagem)=>(
            <li className="liIcone"><img src={imagem}></img></li>
          ))}
        </ul>
        


      </header>
    </div>
  );
}

export default App;
