'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";


export default function ST1() {
  const router = useRouter();

  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 2> 직접 측정한 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동 1</h1>
      <br/>
      <p>측정해 온 시간-혈당 그래프에서 이차함수와 유사한 구간을 찾아보자.</p>
      <p>점의 좌푯값이 자연수가 되도록 설정하기!</p>
      <Button
        onClick={()=>router.push('mathH/first/study/one/guide')}
        variant="outlined"
        color='inherit'
      >
        가이드라인 보기
      </Button>
      

      <div className="flex justify-between my-5 gap-1">
      <div className="box-border h-60 w-96 p-4 border-black border-4">
        <p>측정해 온 그래프 첨부</p>
      </div>
      <div className="box-border h-60 w-96 p-4 border-black border-4">
        <p>답안작성</p>
      </div>
      </div>


  
      </div>

     

    </div>


    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 55%</p>
      <ProgressBar value={55} />
      <div className="flex justify-between">
        <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/study')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/study/two')} />
      </div>
      
    </footer>
    </>

    
  )
}
