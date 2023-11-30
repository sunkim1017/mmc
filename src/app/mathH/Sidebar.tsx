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
import { Button } from '@mui/material';

const drawerWidth = 260;


export default function PermanentDrawerLeft({children}:any) {
  const router = useRouter();
  
  return (
    <Box sx={{ display: 'flex' }}>
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
        <div className='border-4 border-black'>
          <h1 className='px-10 py-5 text-4xl text-teal-400'>MathMind<br/>Connecter</h1>
        </div>

        <Divider />
        <Divider />
        <Divider />
    
        <div className='border-4 border-black px-5 py-5'>
        
          <PersonIcon fontSize='large'/>
          <Typography>사용자명: 나힘내</Typography>
          <Typography>학년: 고등 1</Typography>

          <br/>
          <br/>

          <Typography className='text-sm'>출석률: </Typography>
          <br/>
          <Typography className='text-sm'>이해도: </Typography>
          <br/>
          <Typography className='text-sm'>정답률: </Typography>
          
        </div>

        <Divider />
        <Divider />
        <Divider />

        <List className='border-4 border-black px-0 py-10'>

          <ListItem key={1} onClick={()=>router.push('/mathH/first')}>
            {/* <Button variant='outlined' onClick={()=>router.push('/')}> */}
              1. <br></br>
              이차방정식과 이차함수의 관계
            {/* </Button>   */}
          </ListItem>

          <ListItem key={2} onClick={()=>router.push('/mathH/second')}>
            {/* <Button variant='outlined' onClick={()=>router.push('/')}> */}
              2. <br></br>
              이차방정식의 그래프와 직선의 위치관계
            {/* </Button>   */}
          </ListItem>

          <ListItem key={3} onClick={()=>router.push('/mathH/third')}>
            {/* <Button variant='outlined' onClick={()=>router.push('/')}> */}
              3. <br></br>
              이차함수의 최대, 최소
            {/* </Button>   */}
          </ListItem>

        </List>

        <Divider />
        <Divider />
        <Divider />

        
        <div className='border-4 border-black font-serif'>
          @Math Mind Connecter
        </div>

      </Drawer>
      <Box
        component="main"
        sx={{ bgcolor: 'background.default', height: '100vh', marginTop: -8 }}
      >
        <Toolbar />
        

        
        {children}
        
      </Box>
      
    </Box>
  );
}
