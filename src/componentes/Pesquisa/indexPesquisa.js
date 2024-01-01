import Input from "../Input/indexInput"
import styled from "styled-components"
import { useState } from "react"
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const Div = styled.div`
    display: flex;
    color: black;
    justify-content: center;
    margin-top: 170px;    
    cursor: pointer;
    &:hover{
        border: 1px solid green;
    }
`
const Tabela = styled.table`
    color: black;
    border:solid
`
const TabelaLinha = styled.tr`
    &:nth-of-type(even){
        background-color: rgb(237, 238, 242);
    }
`



function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState()

    console.log(livrosPesquisados)

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre o seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder=" Escreva sua próxima leitura"
                onBlur={evt=>{
                    const textoDigitado = evt.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <Div>
            <Tabela>
            {livrosPesquisados?.map(livro => (
                <TabelaLinha>
                        <p>{livro.nome}</p>
                        <img src={livro.src}></img>                    
                </TabelaLinha>            
                
            ))}
            </Tabela> 
            </Div>
        </PesquisaContainer>
    )
}

export default Pesquisa