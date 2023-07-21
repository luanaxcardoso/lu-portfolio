import { Secaotitulo } from "../secaotitulo/secaotitulo"
import "./informacao.scss"

export function Info() {
  return (
    <div className="infos">
      <Secaotitulo text="Educação" />
      <div className="educacao">
        <span>Análise e Desenvolvimento de Sistemas - UNIFEOB - 2º Sem.</span>
        <span>DevWay Academy - Full-Stack</span>
        <span>Alura One + Oracle - Front-End</span>
      </div>
      <Secaotitulo text="Informações" />
      <div className="informacoes">
        <span>📍 São José dos Campos-SP</span>
        <span>📞 12-991871456</span>
      </div>
    </div>
  )

}