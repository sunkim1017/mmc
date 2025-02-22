'use client'

import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";

export default function AC0() {
  const router = useRouter();
  return (
    <>
    <div className="flex flex-col items-center relative">

    {/* Page Title */}
    

    {/* Mission Text and TbChalkboard */}
    <div className="flex items-center py-52">
      <div className="z-0 absolute -translate-x-32 translate-y-3">
        <TbChalkboard size={550} />
      </div>
      <div className="text-center z-10 ml-2 text-black text-3xl font-bold">
        <p>{`<Mission 1>`}</p>
        <p>{`주어진 혈당 그래프에서`}</p>
        <p>{`이차함수를 찾아라!`}</p>
      </div>
    </div>

    {/* Footer */}
    
  </div>

    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 0%</p>
    <ProgressBar value={0} />
      <div className="flex justify-between">
        <TiArrowBack className="cursor-pointer"   size={100} onClick={() => router.push('/mathH/first/activity')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={() => router.push('/mathH/first/activity/one')} />
      </div>
      
    </footer>
    </>
  )
}
