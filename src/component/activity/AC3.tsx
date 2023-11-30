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
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동1</h1>
      <br/>
      <p>알지오매스를 활용하여 다음 시간-혈당 그래츠에서 이차함수의 형태와 유사한 구간을 설정해보자</p>
      
      <Image src='/image/ac3.jpeg' alt='' width='500' height='500' className="mt-5 ml-64"/>
      </div>

     

    </div>
    <footer style={{marginLeft: 30}} className="text-black">
        
        <p className="font-bold">미션 진행률: 20%</p>
        <ProgressBar value={20}/>
        <div className="absolute" style={{  marginLeft: 800}}><TiArrowBack size={100} onClick={()=>router.push('/mathH/first/activity/one')}/></div>
        <div className="absolute" style={{  marginLeft: 900}}><TiArrowForward size={100} onClick={()=>router.push('/mathH/first/activity/three')}/></div>
      </footer>
    </>
  )
}
