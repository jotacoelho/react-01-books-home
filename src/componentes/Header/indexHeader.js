import Logo from "../Logo/indexLogo";
import OpcoesHeader from "../OpcoesHeader/indexOpcoes";
import IconesHeader from '../IconesHeader/indexIcones';
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader/> {/*pode simplificar já que não tem elemntos filhos dentro*/}
            <IconesHeader></IconesHeader>
      </HeaderContainer>
    )    
}

export default Header