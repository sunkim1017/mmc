'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";


export default function ST3G1() {
  const router = useRouter();

  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 2> 직접 측정한 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동 3 가이드라인 1</h1>
      <br/>
      <p>1. 공복 혈당은 100mg/dL으로 계산한다.</p>
      <p>2. 시간-혈당 그래프에서 혈당=100mg/dL에 해당하는 직선 그리기</p>
      <p>3. 시간-혈당 그래프에서 혈당 최그치를 찾아 점 찍기</p>
      <p>4. 공복 혈당그래프를 지우고, 좌표평면 위에 이차함수의 그래프와 직선만 남겨서 계산하기</p>
      
    
  
      </div>

     

    </div>


    <footer className="text-black mt-4">
      <div className="flex justify-between">
        <TiArrowBack size={100} onClick={()=>router.push('/mathH/first/study/three')} />
        <TiArrowForward size={100} onClick={()=>router.push('/mathH/first/study/three/guide/one')}/> 
      </div>
      
    </footer>
    </>

    
  )
}
