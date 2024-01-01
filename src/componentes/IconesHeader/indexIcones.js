import perfilImg from '../../imagens/perfil.svg';
import sacolaImg from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfilImg, sacolaImg];
const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
`;
const LiIconeContainer = styled.li`
  margin-right: 40px;
  width: 25px;
`;

function IconesHeader() {
  return (
    <IconesContainer>
      {icones.map((imagem) => (
        <LiIconeContainer>
          <img src={imagem}></img>
        </LiIconeContainer>
      ))}
    </IconesContainer>
  );
}
export default IconesHeader;


