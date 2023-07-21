import './secaotitulo.scss';

interface SecaotituloProps{
    text: string;
}

export function Secaotitulo({text}: SecaotituloProps){
    return(
            <h3 className="secaotitulo">{text}</h3>
       
    )
}