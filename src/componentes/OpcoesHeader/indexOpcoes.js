import './estiloOpcoes.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']; // lista para facilitar modificação dos itens

function OpcoesHeader(){
    return(
        <ul className="opcoes">
            {textoOpcoes.map((texto) => ( 
            <li className='opcaoItem'><p>{texto}</p></li> 
            ) )
          //método .map que varre o array e retorna cada valor no parâmetro texto determinado. Então arrow function que trabalha o valor e retorna o elemento html
            }          
        </ul>    
    )
}

export default OpcoesHeader