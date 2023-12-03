'use client'

import ProgressBar from "@/component/PercentageBar"
import { LiaSeedlingSolid } from "react-icons/lia";
import { PiTreeBold } from "react-icons/pi";
import { GiFallingLeaf } from "react-icons/gi";
import { useRouter } from "next/navigation";

export default function FirstPage(){
  const router = useRouter();
  return (
    <>
      <h1 className="text-xl mt-5">1. 이차방정식과 이차함수의 관계</h1>
      <div className="flex justify-between gap-16 mx-40 my-20">
        <div>
          <LiaSeedlingSolid size={200} 
            onClick={()=> {
              router.push(`/mathH/first/activity`)}}/>
          <p className="text-2xl ml-14 font-semibold">활동하기</p>
        </div>

        <div>
          <PiTreeBold size={180}
            onClick={()=> {
              router.push(`/mathH/first/study`)}}/>
          <p className="text-2xl ml-14 mt-5 font-semibold">학습하기</p>
        </div>

        <div>
          <GiFallingLeaf size={170}
            onClick={()=> {
            router.push(`/mathH/first/check`)}}/>
          <p className="text-2xl ml-14 mt-7 font-semibold">확인하기</p>
        </div>


      </div>
    </>
  )
}