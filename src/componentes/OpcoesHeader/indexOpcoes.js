import styled from "styled-components";

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']; // lista para facilitar modificação dos itens

const OpcoesContainer = styled.ul`
    display: flex;

`
const OpcaoItemContainer = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    min-width: 120px;
    cursor: pointer;
`

function OpcoesHeader(){
    return(
        <OpcoesContainer>
            {textoOpcoes.map((texto) => ( 
            <OpcaoItemContainer><p>{texto}</p></OpcaoItemContainer> 
            ) )
          //método .map que varre o array e retorna cada valor no parâmetro texto determinado. Então arrow function que trabalha o valor e retorna o elemento html
            }          
        </OpcoesContainer>
    )
}

export default OpcoesHeader