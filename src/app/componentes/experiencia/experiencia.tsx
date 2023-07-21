import { Secaotitulo } from "../secaotitulo/secaotitulo"
import Image from 'next/image'
import './experiencia.scss'

export function Experiencia() {
    return(
        <div className='experiencia'>
        <Secaotitulo text="Habilidades"/>
        <p>Tecnologias que tenho conhecimento.</p>
        <div className='tempo'>
           
            <div >
                <Image
                src="/html.png"
                alt="Html Logo"
                width={60}
                height={60}
                priority
                />     
                  
            </div>
            <div>
                <Image
                src="/css.png"
                alt="Css Logo"
                width={60}
                height={60}
                priority
                />
                     
            </div>
            <div>
                <Image
                src="/javascript.png"
                alt="Javascript Logo"
                width={60}
                height={60}
                priority
                /> 
            </div>
            <div >
                <Image
                src="/sql.png"
                alt="Sql Logo"
                width={60}
                height={60}
                priority
                />      
            </div>
            <div>
                <Image
                src="/node.png"
                alt="Node Logo"
                width={60}
                height={60}
                priority
                /> 
                      
            </div>
            <div>
                <Image
                src="/python.png"
                alt="Python Logo"
                width={60}
                height={60}
                priority
                /> 
                   
            </div>
        </div>
        </div>
    )

}