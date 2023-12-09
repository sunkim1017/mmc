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
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`학습한 개념을 정리해볼까요?`}</p>

      <div className="flex justify-center">
        <Image priority src='/image/ch.png' alt='' width='400' height='200' className="mt-5 ml-10 h-56"/>
        <div className='ml-10 flex items-center'>
          <div>
          <IoChatbubbleOutline size={190} className="text-orange-200"/>
          <div className="text-center text-orange-500 z-10 -translate-x-0 -translate-y-32 text-xl font-bold">
          <p>{`수학(상) 교과서`}</p>
          <p>{`(신사고)62~63쪽`}</p>
          </div>
        </div>
        </div>
        <Image priority className="ml-10 h-56"
        src={'/image/ch2.jpeg'}
        alt=''
        width={140}
        height={100}
      />
      </div>
      <div className="grid justify-center">
      <p className="mt-10 font-bold text-xl">
        이차함수 y=ax<sup>2</sup>+bx+c의 그래프와 직선 y=mx+n은 두 점에서 만나거나, 한 점에서 만나거나, 만나지 않는다.</p>
      <p className="font-bold text-xl">
        이 두 그래프의 교점은 ax<sup>2</sup>+bx+c=mx+n으로 구할 수 있고, 이 이차방정식의 실근의 개수가 바로 교점의 개수가 된다. </p>
      <p className="font-bold text-xl">따라서 이 방정식의 실근의 개수에 따라 직선과 이차함수가 만나는 점의 개수가 달라진다.</p>
      </div>

      

     

    </div>
      <footer className="text-black mt-4">
      <p className="font-bold">미션 진행률: 100%</p>
      <ProgressBar value={100} />
      <div className="flex justify-between">
        <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/CH')}/>
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/CH/plus')}/>
      </div>
      
    </footer>
    </>
  )
}
