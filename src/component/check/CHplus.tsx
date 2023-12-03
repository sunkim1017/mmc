'use client'

import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { IoChatbubbleOutline } from "react-icons/io5";
import Link from "next/link";

export default function CHplus() {
  const router = useRouter();
  return (
    <>
    <div className="relative">
      <p className="mt-5 text-3xl text-blue-950 font-semibold text-left">{`<Mission + > 추가학습 링크`}</p>
      
      <div className='flex justify-start gap-14 px-14 py-10'>
      <div className="flex justify-start">
        
      <Button
        size="large"
        variant="outlined"
        style={{backgroundColor: "#F2F5A9", color: "#B45F04", borderColor: "#B45F04"}}
      >
        <Link href={'https://teacher.desmos.com/collection/5f36d2d2aa4e5b25271935dd?r=w.hd&lang=ko&collections=featured-collections'}>
        <p className="font-extrabold text-xl">데스모스</p>
        <p className="font-extrabold text-xl">{`(DESMOS)`}</p>
        </Link>
      </Button>
      </div>

      <div>

      <div className="flex justify-start">
      <Button
          size="large"
          variant="outlined"
          style={{backgroundColor: "#F2F5A9", color: "#B45F04", borderColor: "#B45F04"}}
          >
        <Link href={"https://www.algeomath.kr/algeo/tutorial/8/view.do?sortName=CONT"}>
        <p className="font-extrabold text-xl">알지오매스</p>
        <p className="font-extrabold text-xl">{`(ALGEOMATH)`}</p>
        </Link>
        </Button>
      </div>
      </div>
      
      </div>
      </div>

      

     

    
      <footer className="text-black mt-4">
      <p className="font-bold">미션 진행률: 100%</p>
      <ProgressBar value={100} />
      <div className="flex justify-between">
        <TiArrowBack size={100} onClick={()=>router.push('/mathH/first/check')}/>
        {/* <TiArrowForward size={100} onClick={()=>router.push('/mathH/first/study')}/> */}
      </div>
      
    </footer>
    </>
  )
}