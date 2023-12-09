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
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 4>_비교하기`}</p>
    
      <div className="px-10 py-5">
      {/* <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/> 활동 1</h1> */}
      <br/>
      <p>활동 1~3을 바탕으로 비행기의 높이에 따라 D의 값이 어떻게 변화하는지 확인해보자.</p>
  

      
      
      <div className='justify-center flex gap-5 mt-5'>
        <Image src='/image/tw8.png' alt='' width={400} height={100} />
      <div className="box-border h-56 w-10/12 p-4 border-black border-4 my-10 ">
        <p>답안작성</p>
      </div>
      </div>


  
      </div>

     

    </div>


    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 75%</p>
      <ProgressBar value={75} />
    
      <div className="flex justify-between">
      <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/M3/two')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/M3/four')} />     </div>
      
    </footer>
    </>

    
  )
}
