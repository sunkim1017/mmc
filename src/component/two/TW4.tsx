'use client'

import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";

export default function TW2() {
  const router = useRouter();
  return (
    <>
    <div className="flex flex-col items-center relative">

    {/* Page Title */}
    

    {/* Mission Text and TbChalkboard */}
    <div className="flex items-center py-52">
      <div className="z-0 absolute -translate-x-40 translate-y-3">
        <TbChalkboard size={550} />
      </div>
      <div className="text-center z-10 text-black text-3xl font-bold">
        <p>{`<Mission 2>`}</p>
        <p>{`적기를 포격하라 (1)`}</p>
      </div>
    </div>

    {/* Footer */}
    
  </div>

    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 35%</p>
    <ProgressBar value={35} />
      <div className="flex justify-between">
        <TiArrowBack className="cursor-pointer"   size={100} onClick={() => router.push('/mathH/second/M1/two')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={() => router.push('/mathH/second/M2/two')} />
      </div>
      
    </footer>
    </>
  )
}
