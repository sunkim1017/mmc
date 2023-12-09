'use client'

import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";

export default function AC1() {
  const router = useRouter();
  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 1> 주어진 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  생각열기</h1>
      <br/>
      <p>다음은 식사 후 정상인과 당뇨 환자, 예비 당뇨 환자의 혈당 곡선을 나타낸 그래프이다.</p>
      <p>{`세 그래프를 관찰한 후 특징(공통점과 차이점 등)을 생각해보자.`}</p>
      <Image priority src='/image/ac2.jpg' alt='' width='350' height='350' className="mt-5 ml-72"/>
      </div>

     

    </div>


    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 10%</p>
      <ProgressBar value={10} />
      <div className="flex justify-between">
        <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/activity')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/activity/two')} />
      </div>
      
    </footer>
    </>

    
  )
}
