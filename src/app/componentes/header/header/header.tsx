import Image from 'next/image'
import { Sacramento} from 'next/font/google'
import "./header.scss"

export function Header(){
    return(
        <div className='header'>
        <div>
          <h2>Olá! Eu sou a</h2>
          <h1>Luana Cardoso!</h1>
          <h3>Desenvolvedora Full-Stack</h3>
        </div >
        <Image
          src="/luana2.jpeg"
          alt="Luana"
          width={300}
          height={300}
          priority
        />
      </div>
    )
}