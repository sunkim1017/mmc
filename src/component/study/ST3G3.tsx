'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";


export default function ST3G3() {
  const router = useRouter();

  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 2> 직접 측정한 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동 3 가이드라인 3</h1>
      <br/>
      
      
      
      
      <div className="flex justify-center ">
        <Image src='/image/s4.png' alt='' width='450' height='450' className="mt-5 ml-10"/>
        
      </div>
      <p className="mt-5">{`해설) 점 G에서 공복혈당으로 돌아오는 데 걸리는 시간을 구하려면 이차함수와 y=-1의 교점을 찾아 그 점과 점G의 x좌표값 차이를 계산하면 된다.`}</p>
      <p>{`여기서는 점B가 이차함수와 y=-1의 교점이므로 1.8시간이 걸린다.`}</p>


  
      </div>

     

    </div>


    <footer className="text-black mt-4">
      <div className="flex justify-between">
        <TiArrowBack size={100} onClick={()=>router.push('/mathH/first/study/three/guide/one')} />
        {/* <TiArrowForward size={100} onClick={()=>router.push('/mathH/first/study/three/guide/two')}/>  */}
      </div>
      
    </footer>
    </>

    
  )
}
