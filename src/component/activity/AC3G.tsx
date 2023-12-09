'use client'

import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Box, Button } from "@mui/material";

export default function AC3G() {
  const router = useRouter();
  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 1> 주어진 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동2 가이드라인</h1>
      <br/>
      <br/>
      <p>1. 그래프가 지나는 점을 중심으로 이차함수를 만든다.</p>
      <p>2. 완전히 일치하지 않아도 된다! 자연수 점을 중심으로 계산하자.</p>


      <div className="flex flex-between ">
        <Image priority src='/image/3.png' alt='' width='250' height='250' className="mt-5 ml-10"/>
        <div>

        {/* <p className="mt-20 ml-10">{`해설) y=-x^2 + 1의 그래프와 유사하다!`}</p> */}
        <p className="mt-20 ml-10">해설) y=-x<sup>2</sup> + 1의 그래프와 유사하다!</p>
          <br/>
          <p className="mt-20 ml-10">{`<--예시자료`}</p>          
        </div>
        
      </div>

      
      </div>

     

    </div>
    <footer style={{marginLeft: 30}} className="text-black">
        <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/activity/three')}/>
    </footer>

    </>
  )
}
