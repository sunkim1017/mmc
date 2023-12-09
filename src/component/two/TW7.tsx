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
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 3> 적기를 포격하라 (2)`}</p>
    
      <div className="px-10 py-5">
      {/* <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/> 활동 1</h1> */}
      <br/>
      <p>3) 포격 확률을 높이기 위해 적 비행기와 두 번 만나도록 포탄을 쏘려고 한다. 포탄과 두 번 만나는 적비행기의 a값은 어떻게 되는가? </p>
      <p>3-1) 적 비행기가 포탄을 만나는 시간은 포탄을 쏜 지 몇 분 후인가?</p>
  

      
      
      <div className='justify-center flex gap-5 mt-5'>
        <Image src='/image/tw7.png' alt='' width={400} height={100} />
      <div className="box-border h-56 w-10/12 p-4 border-black border-4 my-10 ">
        <p>답안작성</p>
      </div>
      </div>


  
      </div>

     

    </div>


    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 65%</p>
      <ProgressBar value={65} />
    
      <div className="flex justify-between">
      <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/M3/one')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/M3/three')} />     </div>
      
    </footer>
    </>

    
  )
}
