'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";


export default function ST2G() {
  const router = useRouter();

  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 2> 직접 측정한 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동 2 가이드라인</h1>
      <br/>
      <p>1. 그래프가 지나는 점을 중심으로 이차함수를 추론한다.</p>
      
      
      
      <div className="flex flex-between ">
        <Image src='/image/s2.png' alt='' width='300' height='250' className="mt-5 ml-10"/>
        <div>

        <p className="mt-20 ml-10">{`해설) y=3/5(x-1)^2-1의 그래프와 유사하다!`}</p>
          <br/>
          <p className="mt-20 ml-10">{`<--예시자료`}</p>          
        </div>
      </div>


  
      </div>

     

    </div>


    <footer className="text-black mt-4">
      <div className="flex justify-between">
        <TiArrowBack size={100} onClick={()=>router.push('/mathH/first/study/two')} />
        
      </div>
      
    </footer>
    </>

    
  )
}
