import './globals.scss' //importar o css global
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'],
weight: ['300','400', '500','600']
})

export const metadata: Metadata = {
  title: 'Luana Cardoso',
  description: 'Luana Cardoso - Desenvolvedora Full Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
