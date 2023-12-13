import './estiloIcones.css'
import perfilImg from '../../imagens/perfil.svg'
import sacolaImg from '../../imagens/sacola.svg'

const icones = [perfilImg, sacolaImg]

function IconesHeader(){
    return (
        <ul className ="icones">
          {icones.map((imagem)=>(
            <li className="liIcone"><img src={imagem}></img></li>
          ))}
        </ul>
    )
}

export default IconesHeader