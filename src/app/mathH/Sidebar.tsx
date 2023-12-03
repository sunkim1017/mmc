'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { useRouter } from 'next/navigation';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import LoadingBar from '@/component/template/LoadingBar';
import Image from 'next/image';

const drawerWidth = 260;


export default function PermanentDrawerLeft({children}:any) {
  const router = useRouter();
  
  return (
    <>
    <Box sx={{ display: 'flex', 
      width: '100vw',
      overflowX: 'auto',
    }}>
      <CssBaseline />
        <Toolbar>
          {/* <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography> */}
          {/* {children} */}
        </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <div className='border-4 border-blue-950'>
          {/* <h1 className='px-10 py-5 text-4xl text-teal-400'>MathMind<br/>Connecter</h1> */}
          <Image src='/image/격자버전.jpeg' alt='' width='300' height='60'></Image>
        </div>

        <Divider />
        <Divider />
        
    
        <div className='border-4 border-blue-950 px-5 py-5 text-blue-950 font-bold' style={{backgroundColor: "#c6e7a4"}}>
        
          <PersonIcon fontSize='large'/>
          <p>사용자명: 나힘내</p>
          <p>학년: 고등 1</p>

          <br/>
          <br/>

          <Typography className='text-sm text-blue-950 '>출석률: </Typography>
          <br/>
          <Typography className='text-sm text-blue-950 '>이해도: </Typography>
          <br/>
          <Typography className='text-sm text-blue-950 '>정답률: </Typography>
          
        </div>

        <Divider />
        <Divider />


        <List className='border-4 border-blue-950 px-0 py-10' style={{backgroundColor: "#c6e7a4"}}>

          <ListItem key={1} 
            onClick={()=>router.push('/mathH/first')}
          >
            {/* <Button variant='outlined' onClick={()=>router.push('/')}> */}
               
              <p className='font-semibold text-blue-950 '>1. <br></br>이차방정식과 이차함수의 관계</p>
            {/* </Button>   */}
          </ListItem>

          <ListItem key={2} onClick={()=>router.push('/mathH/second')}>
            {/* <Button variant='outlined' onClick={()=>router.push('/')}> */}
              <p className='font-semibold text-blue-950'>2. <br></br>이차방정식의 그래프와 직선의 위치관계</p>
            {/* </Button>   */}
          </ListItem>

          <ListItem key={3} onClick={()=>router.push('/mathH/third')}>
            {/* <Button variant='outlined' onClick={()=>router.push('/')}> */}
              <p className='font-semibold text-blue-950'>3. <br></br>이차함수의 최대, 최소</p>
            {/* </Button>   */}
          </ListItem>

        </List>

        <Divider />
        <Divider />
        

        
        <div className='border-4 border-blue-950 font-serif text-blue-950' style={{backgroundColor: "#c6e7a4"}}>
          @Math Mind Connecter
        </div>

      </Drawer>
      <Paper
        component="main"
        sx={{
          marginTop: 7,
          bgcolor: '#F2F2F2',
          width: '75%',
          height: '100vh',
          overflowX: 'auto', // Add this line to enable overflow
        }}
      >
        <Toolbar />
        
        {children}
        
      </Paper>
      
    </Box>
    </>
  );
}
