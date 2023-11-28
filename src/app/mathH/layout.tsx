import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {Open_Sans} from 'next/font/google';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermanentDrawerLeft from './Sidebar';


const sans = Open_Sans({subsets: ['latin']});
const inter = Inter({ subsets: ['latin'] });

export default function mathHLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-white '>
    <PermanentDrawerLeft>
    <h2 className='text-3xl text-black text-left'>이차함수와 이차방정식</h2>
    <main className='text-black'>
    {children}
    </main>
    </PermanentDrawerLeft>
    
    </div>
  )
}