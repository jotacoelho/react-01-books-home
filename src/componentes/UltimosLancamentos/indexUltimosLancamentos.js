import styled from 'styled-components'
import {livros} from "./dadosUltimosLancamentos"
import {Titulo} from "../Titulo/indexTitulo.js"
import CardRecomenda from '../CardRecomenda/indexCardRecomenda'
import imagemLivro from "../../imagens/livro2.png"

function UltimosLancamentos(){

    const UltimosLancamentosContainer = styled.section`
        background-color: #EBECEE;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
    `

    const NovosLivrosContainer = styled.div`
        margin-top: 30px;
        display: flex;
        width: 100%;
        justify-content: center;
        cursor: pointer;
        
    `

    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00"
                tamanhoFonte="36px"
                alinhamento="left"
                >Últimos Lançamentos</Titulo>
            <Titulo>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
            titulo="Talvez você se interesse por"
            subtitulo="Angular 11"
            paragrafo="Construindo uma aplicação com a plataforma Google!"
            srcImagem={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos