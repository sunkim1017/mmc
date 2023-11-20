import Dashboard from '@/component/Dashboard'
import Image from 'next/image'
// import styles from './page.module.css'
import Mermaid from '@/component/Dashboard';

export default function Home() {
  return (
    <>
    <main className='bg-white'>
      Main
      <Mermaid
         chart={`flowchart LR
         id
       `}
      >
      </Mermaid>
    </main>
      {/* <Mermaid
         chart={`flowchart LR
         id
       `}
      >
      </Mermaid> */}
    </>
  )
}
