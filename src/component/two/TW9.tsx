'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";


export default function TW5() {
  const router = useRouter();

  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 5>_게임하기`}</p>
    
      <div className="px-10 py-5">
      {/* <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/> 활동 1</h1> */}
      <br/>
      <p>포탄의 방향 및 궤도와 비행기의 높이 및 각도를 조정해보며 함수가 어떻게 변화하는지 확인해보자</p>
      
  

      
      
      <div className='justify-center flex mt-5'>
        <Image src='/image/tw9.png' alt='' width={500} height={100} priority/>
      </div>


  
      </div>

     

    </div>


    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 90%</p>
      <ProgressBar value={90} />
    
      <div className="flex justify-between">
      <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/M3/three')} />
      <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/CH')} />     </div>
      
    </footer>
    </>

    
  )
}
