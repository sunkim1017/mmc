'use client'

import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function CH() {
  const router = useRouter();
  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 3> 학습한 개념을 정리해볼까요?`}</p>

      <div className="flex justify-center">
        <Image src='/image/s5.png' alt='' width='500' height='450' className="mt-5 ml-10"/>
        <div className='ml-10 flex items-center'>
          <div>
          <IoChatbubbleOutline size={160} className="text-orange-200"/>
          <div className="text-center text-orange-500 z-10 -translate-x-0 -translate-y-28 text-xl font-bold">
          <p>{`교과서`}</p>
          <p>{`60~61쪽`}</p>
          </div>

          <div className='justify-center flex'>
          <div className="text-center box-border bg-orange-500 text-white text-bold py-3 px-5 rounded-lg ">
            <p>이차방정식과</p>
            <p>이차함수의 관계</p>
          </div>
          </div>
        </div>
        </div>
      </div>
      <div className="grid justify-center">
      <p className="mt-10 font-bold text-xl">이차함수 y=ax<sup>2</sup>+bx+c의 그래프와 x축의 교점의 x자표는 이차방정식 ax<sup>2</sup>+bx+c=0의 실근과 같다.</p>
      <p className="font-bold text-xl">{`--> 이차방정식의 실근의 개수에 따라 이차함수가 x축과 만나는 점의 개수가 달라진다.`}</p>
      </div>

      

     

    </div>
      <footer className="text-black mt-4">
      <p className="font-bold">미션 진행률: 100%</p>
      <ProgressBar value={100} />
      <div className="flex justify-between">
        <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/study/four')}/>
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/check/plus')}/>
      </div>
      
    </footer>
    </>
  )
}
