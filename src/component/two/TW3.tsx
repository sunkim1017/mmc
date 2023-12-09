'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";


export default function TW3() {
  const router = useRouter();

  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 1> 아군기를 지켜라: 적의 포탄을 피해라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/> 활동 1</h1>
      <br/>
      <p>아군 비행기(파란색)가 포탄을 피해서 비행하려 한다. 포탄은 f(x)와 같이 포물선으로 움직이고,  </p>
      <p>아군 비행기는 g(x)와 같이 직선으로 움직인다고 할때, a의 값의 범위를 구하여라.</p>
  

      
      
      <div className='justify-center flex gap-5 mt-5'>
        <Image src='/image/t3.png' alt='' width={400} height={100} />
      <div className="box-border h-56 w-10/12 p-4 border-black border-4 my-10 ">
        <p>답안작성</p>
      </div>
      </div>


  
      </div>

     

    </div>


    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 20%</p>
      <ProgressBar value={20} />
    
      <div className="flex justify-between">
      <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/M1/one')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/M2/one')} />     </div>
      
    </footer>
    </>

    
  )
}
