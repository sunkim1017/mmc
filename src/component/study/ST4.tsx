'use client'

import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { RiChat1Line } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

export default function ST0() {
  const router = useRouter();
  return (
    <>
    <div className="flex flex-col items-center relative">

    {/* Page Title */}
    

    {/* Mission Text and TbChalkboard */}
    <div className="flex justify-between">
    <div className="flex items-center py-52">
      <div className="z-0 absolute -translate-x-20 translate-y-3">
        <TbChalkboard size={520} />
      </div>
      <div className="text-center z-10 ml-24 text-black text-4xl font-bold">
        <p>{`Mission`}</p>
        <p>{`Complete`}</p>
      </div>
    </div>

    <div className="flex items-center translate-x-40">
      <FaLongArrowAltRight size={100}/>
      <Link className='cursor-pointer' href='/mathH/first/check'>
      <RiChat1Line  size={300} 
      />
      <div className="text-center z-10 -translate-y-48  text-black text-2xl font-bold">
        <p>{`학습한`}</p>
        <p>{`개념 정리하기`}</p>
      </div>
      </Link>
    </div>
    </div>
    
  </div>

    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 100%</p>
    <ProgressBar value={100} />
      <div className="flex justify-between">
        <TiArrowBack className="cursor-pointer"  size={100} onClick={() => router.push('/mathH/first/study/three')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={() => router.push('/mathH/first/check')} />
        
      </div>
      
    </footer>
    </>
  )
}
