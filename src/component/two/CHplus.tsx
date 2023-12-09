'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";
import Link from "next/link";


export default function CHplus() {
  const router = useRouter();
  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission + > 추가학습 링크`}</p>
      
      <div className='flex justify-start gap-14 px-14 py-10'>
      <div className="flex justify-start">
        
      <button
        className="hover:bg-yellow-200 bg-yellow-100 hover:shadow-md text-yellow-700 border-2 border-yellow-700 hover:border-yellow-800 p-3 rounded-lg"
      >
        <Link href={'https://teacher.desmos.com/collection/5f36d2d2aa4e5b25271935dd?r=w.hd&lang=ko&collections=featured-collections'}>
        <p className="font-extrabold text-xl">데스모스</p>
        <p className="font-extrabold text-xl">{`(DESMOS)`}</p>
        </Link>
      </button>
      </div>

      <div>

      <div className="flex justify-start">
      <button
          className="hover:bg-yellow-200 bg-yellow-100 hover:shadow-md text-yellow-700 border-2 border-yellow-700 hover:border-yellow-800 p-3 rounded-lg"
          >
        <Link href={"https://www.algeomath.kr/algeo/tutorial/8/view.do?sortName=CONT"}>
        <p className="font-extrabold text-xl">알지오매스</p>
        <p className="font-extrabold text-xl">{`(ALGEOMATH)`}</p>
        </Link>
        </button>
      </div>

      </div>
      
      <div className="flex justify-start">
      <button
          className="hover:bg-yellow-200 bg-yellow-100 hover:shadow-md text-yellow-700 border-2 border-yellow-700 hover:border-yellow-800 p-3 rounded-lg w-28"
          >
        <Link href={"https://www.ebsi.co.kr/ebs/lms/player/retrieveLmsPlayerHtml5.ebs?sbjtapplyId=&sbjtId=S20230000448&lessonId=LS100030043036&lecGbn=V1M4"}>
        <p className="font-extrabold text-xl">EBS<br/> 강의</p>
        {/* <p className="font-extrabold text-xl">{`(ALGEOMATH)`}</p> */}
        </Link>
        </button>
        
      </div>

      <div className="flex justify-start">
      <button
          className="hover:bg-yellow-200 bg-yellow-100 hover:shadow-md text-yellow-700 border-2 border-yellow-700 hover:border-yellow-800 p-3 rounded-lg w-28"
          >
        <Link href={"https://www.youtube.com/watch?v=Kvg5-HGawkE"}>
        <p className="font-extrabold text-xl">유튜브 <br/>강의</p>
        {/* <p className="font-extrabold text-xl">{`(ALGEOMATH)`}</p> */}
        </Link>
        </button>
        
      </div>

      <div className="flex justify-start">
      <button
          className="hover:bg-yellow-200 bg-yellow-100 hover:shadow-md text-yellow-700 border-2 border-yellow-700 hover:border-yellow-800 p-3 rounded-lg"
          >
        <p className="font-extrabold text-lg">더 많은 문제 풀기</p>
        </button>
      </div>


      </div>
      </div>

      

     

    
      <footer className="text-black mt-4">
      <p className="font-bold">미션 진행률: 100%</p>
      <ProgressBar value={100} />
      <div className="flex justify-between">
        <TiArrowBack className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/second/CH/one')}/>
        {/* <TiArrowForward  className="cursor-pointer"  size={100} onClick={()=>router.push('/mathH/first/study')}/> */}
      </div>
      
    </footer>
    </>
  )
}
