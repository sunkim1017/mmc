'use client'

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {Open_Sans} from 'next/font/google';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermanentDrawerLeft from './Sidebar';
import Paper from '@mui/material';
import styled from 'styled-components';

const sans = Open_Sans({subsets: ['latin']});
const inter = Inter({ subsets: ['latin'] });


const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
min-height: 100vh;
height: auto;
overflow: auto;
`;


export default function mathHLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
    <div className='bg-white '>
    <PermanentDrawerLeft>
      {/* <div style={{display: 'contents'}}> */}
    <p className='text-black -mt-10 px-10'>{`(1) 고 1 수학 (상)`}</p>
    <h2 className='text-4xl px-10 font-extrabold text-black text-left'>이차함수와 이차방정식</h2>
    <main className='px-10 text-black'>
    {children}
    </main>
    {/* </div> */}
    </PermanentDrawerLeft>
    
    </div>
    </Container>
  )
}