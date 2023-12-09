'use client'

import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";

export default function AC2G() {
  const router = useRouter();
  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission 1> 주어진 혈당그래프에서 이차함수를 찾아라!`}</p>
    
      <div className="px-10 py-5">
      <h1 className="flex flex-between text-lg font-bold"><BsPencil size={25}/>  활동1 가이드라인</h1>
      <br/>
      <p>1. 시간-혈당 그래프 자료를 알지오매스 좌표평면에 불러오기</p>
      <p>2. 정산인 그래프에서 이차함수와 유사한 구간을 찾아 원점 가까이에 가져오기</p>
      <p>3. {`그래프와 x축, y축과의 교점 체크하기(교점의 좌표는 자연수가 되도록 해보자!)`}</p>

      <div className="flex flex-between ">
        <Image priority src='/image/ac3g.png' alt='' width='250' height='250' className="mt-5 ml-10"/>
        <div>

          <p className="mt-20 ml-10">{`해설) 정상인 그래프를 위와 같이 좌표평면 위에 위치시켰을 때 x가 -1부터 1까지인 구간은 이차함수와 유사한 형태다. 또 x, y축과의 교점을 자연수로 표현하면 대략 B(-1,0), C(1,0), D(0,1)이라고 볼 수 있다.`}</p>
          <br/>
          <p className="mt-20 ml-10">{`<--예시자료`}</p>          
        </div>
        
      </div>

      
      </div>

     

    </div>
    <footer style={{marginLeft: 30}} className="text-black">
        <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/activity/two')}/>
    </footer>

    
    </>
  )
}
