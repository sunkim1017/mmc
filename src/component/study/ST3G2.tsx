'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";


export default function ST3G2() {
  const router = useRouter();

  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 2> 직접 측정한 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동 3 가이드라인 2</h1>
      <br/>
      
      
      
      
      <div className="flex justify-center ">
        <Image src='/image/s3.png' alt='' width='400' height='250' className="mt-5 ml-10"/>
        <div>

        </div>
      </div>


  
      </div>

     

    </div>


    <footer className="text-black mt-4">
      <div className="flex justify-between">
        <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/study/three/guide')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/study/three/guide/two')}/> 
      </div>
      
    </footer>
    </>

    
  )
}
