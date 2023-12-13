import './estiloHeader.css';
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader/indexOpcoes";
import IconesHeader from "../IconesHeader/indexIcones";


function Header(){
    return(
        <header className="App-header">
            <Logo></Logo>
            <OpcoesHeader/> {/*pode simplificar já que não tem elemntos filhos dentro*/}
            <IconesHeader></IconesHeader>
      </header>
    )    
}

export default Header