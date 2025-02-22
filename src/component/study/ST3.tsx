'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";


export default function ST3() {
  const router = useRouter();

  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 2> 직접 측정한 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동 3</h1>
      <br/>
      <p>활동2에서 찾은 이차함수 식에서 혈당이 공복혈당 수치가 되는 두 시점을 찾고, 두 시점 간 간격을 구하여라.</p>
      <p>활동1,2에서 찾은 그래프와 식을 통해 공복혈당수치에서 혈당최고치까지 이르는 시간과 혈당최고치에서 공복혈당수치까지 이르는 시간을 구해보고 비교해보자</p>

      {/* <p>혈당 최고치에서 공복혈당으로 돌아올 때까지 시간이 얼마나 걸리는지 구해보자.</p> */}
      <Button
        onClick={()=>router.push('mathH/first/study/three/guide')}
        variant="outlined"
        color='inherit'
      >
        가이드라인 보기
      </Button>
      
      <div className='justify-center flex'>
      <div className="box-border h-56 w-10/12 p-4 border-black border-4 my-10 ">
        <p>답안작성</p>
      </div>
      </div>


  
      </div>

     

    </div>


    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 90%</p>
      <ProgressBar value={90} />
    
      <div className="flex justify-between">
      <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/study/two')} />
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/study/four')} />     </div>
      
    </footer>
    </>

    
  )
}
