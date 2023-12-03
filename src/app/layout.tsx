import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {Open_Sans} from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';




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
        <header className='flex justify-between border-b-4 border-blue-950' style={{backgroundColor: "#c6e7a4"}}>
          {/* <h1 className='my-5 mx-5 text-4xl text-teal-400'>MathMind<br/>Connecter</h1> */}
          <Image src='/image/가로긴버전.jpeg' alt='' width='200' height='60' className=''></Image>
          <div className='mt-5'>
            <Link className='mr-8 text-xl text-blue-950' href="/">Home</Link>
            <Link className='mr-8 text-xl text-blue-950' href="/mid1">중1</Link>
            <Link className='mr-8 text-xl text-blue-950' href="/mid2">중2</Link>
            <Link className='mr-8 text-xl text-blue-950' href="/mid3">중3</Link>
            <Link className='mr-8 text-xl text-blue-950' href="/mathH">수학 상</Link>
            <Link className='mr-8 text-xl text-blue-950' href="/mathL">수학 하</Link>
            <Link className='mr-8 text-xl text-blue-950' href="/math1">수학1</Link>
            <Link className='mr-8 text-xl text-blue-950' href="/myPage">마이페이지</Link> 
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
