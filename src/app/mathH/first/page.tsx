'use client'

import ProgressBar from "@/component/PercentageBar"
import { LiaSeedlingSolid } from "react-icons/lia";
import { PiTreeBold } from "react-icons/pi";
import { GiFallingLeaf } from "react-icons/gi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FirstPage(){
  const router = useRouter();
  return (
    <>
      <h1 className="text-xl mt-5">1. 이차방정식과 이차함수의 관계</h1>
      <div className="flex justify-between gap-16 py-10 px-5">
        <div>
        <Link href='/mathH/first/activity'>
          <LiaSeedlingSolid size={200} 
            className="cursor-pointer"
            />
              <p className="text-2xl ml-14 font-semibold">활동하기</p>
        </Link>
          
        </div>

        <div>
          <Link href='/mathH/first/study'>
          <PiTreeBold size={180}
          className="cursor-pointer"
          />
          <p className="text-2xl ml-14 mt-5 font-semibold">학습하기</p>
          </Link>
        </div>

        <div>
          <Link href='/mathH/first/check'>
          <GiFallingLeaf size={170}
          className="cursor-pointer"
          />
          <p className="text-2xl ml-14 mt-7 font-semibold">확인하기</p>
          </Link>
        </div>


      </div>
    </>
  )
}