import Header from './componentes/Header/indexHeader';
import Pesquisa from './componentes/Pesquisa/indexPesquisa';
import styled from 'styled-components';

const AppContainer = styled.div`

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
const Titulo = styled.h1`
  color: white;
`


function App() {
  return (
    <AppContainer>
      <Header></Header>
      {/* <Titulo>DELICINHA MT LINDONAA</Titulo> */}
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
