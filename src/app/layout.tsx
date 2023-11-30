import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {Open_Sans} from 'next/font/google';
import Link from 'next/link';




const sans = Open_Sans({subsets: ['latin']});
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MMC',
  description: 'Math Mind Connecter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body >
        <header className='flex justify-between bg-white'>
          <h1 className='my-5 mx-5 text-4xl text-teal-400'>MathMind<br/>Connecter</h1>
          <div className='mt-5'>
            <Link className='mr-8 text-xl text-gray-950' href="/">Home</Link>
            <Link className='mr-8 text-xl text-gray-950' href="/mid1">중1</Link>
            <Link className='mr-8 text-xl text-gray-950' href="/mid2">중2</Link>
            <Link className='mr-8 text-xl text-gray-950' href="/mid3">중3</Link>
            <Link className='mr-8 text-xl text-gray-950' href="/mathH">수학 상</Link>
            <Link className='mr-8 text-xl text-gray-950' href="/mathL">수학 하</Link>
            <Link className='mr-8 text-xl text-gray-950' href="/math1">수학1</Link>
            <Link className='mr-8 text-xl text-gray-950' href="/myPage">마이페이지</Link> 
            {/* <Menu>
              <MenuItem></MenuItem>
            </Menu> */}
          </div>
        </header>
        {children}
        <footer className='flex justify-center bg-white text-teal-400'>
          <p className='font-serif'>Copyright 2023. MMC. All Rights Reserved. </p>
        </footer>
      </body>
      
    </html>
  )
}
