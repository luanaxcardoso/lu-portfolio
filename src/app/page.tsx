import { Experiencia } from './componentes/experiencia/experiencia'
import {Header} from './componentes/header/header/header' 
import { EmailIcon } from './componentes/icons/email-icon'
import { Info } from './componentes/infomacao/informacao'
import { SocialBtn } from './componentes/social-btns/social-btn'
import "./estilos/home.scss"

export default function Home() {
  return (
    <main className='container' >
     <Header/>  
     <Experiencia/>
     <Info/>
        <div className="botoes2">
          <SocialBtn/>
          <a className='btn-primary' href="mailto:luanacardoso.bc@gmail.com">
            Contacte-me
            <EmailIcon/>
          </a>
        </div>
    </main>
  )
}
