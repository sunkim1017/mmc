'use client'

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {Open_Sans} from 'next/font/google';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material';
import styled from 'styled-components';

const sans = Open_Sans({subsets: ['latin']});
const inter = Inter({ subsets: ['latin'] });


export default function mathHLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <h2 className='text-4xl px-10 font-extrabold text-black text-left'>이차방정식과 이차함수의 관계</h2>
    <main className='px-10 text-black'>
    {children}
    </main>

    </>
  )
}