'use client'

import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Box, Button } from "@mui/material";

export default function AC4() {
  const router = useRouter();
  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 1> 주어진 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동2</h1>
      <br/>
      <p>활동 1에서 찾은 그래프의 이차함수 식을 구해보자. </p>
      <Button
        //onClick={()=>router.push('mathH/first/activity/two/guide')}
        variant="outlined"
        color='inherit'
      >
        가이드라인 보기
      </Button>
      <div className="box-border h-56 w-96 p-4 border-black border-4 my-10">
        <p>답안작성</p>
      </div>
      
      </div>
      

     

    </div>
      <footer className="text-black mt-4">
      <p className="font-bold">미션 진행률: 35%</p>
      <ProgressBar value={20} />
      <div className="flex justify-between">
        <TiArrowBack size={100} onClick={()=>router.push('/mathH/first/activity/one')}/>
        <TiArrowForward size={100} onClick={()=>router.push('/mathH/first/activity/three')}/>
      </div>
      
    </footer>
    </>
  )
}
