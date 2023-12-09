'use client'

import ProgressBar from "@/component/PercentageBar";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TWO (){
  const router = useRouter();

  return(
    <>
    <div className="flex justify-start">
    <section>

    <div className="justify-center flex"><h2 className="text-md my-5 bg-yellow-300 w-fit font-bold">지난 시간 배운 내용을 되짚어보고 오늘 배울 내용을 미리 보자!</h2></div>
    
    <div className="flex justify-start gap-3">
    
    <div className="gap-2">
    <div className="text-center box-border bg-amber-100 font-bold py-3 px-5 rounded-lg w-52">
      <p>지난 시간에 무엇을</p>
      <p>배웠을까?</p>
    </div>
    <Image src={'/image/T0.png'} alt='' width={300}
        height={300} className="mt-4"/>
    </div>

      <Image
        src={'/image/s5.png'}
        alt=''
        width={500}
        height={500}
      />


    </div>


    <div className="flex justify-start gap-24 mt-10">
    <div className="text-center grid justify-items-center box-border h-20 bg-amber-100 font-extrabold py-3 px-5 rounded-lg w-52">
      <p className="bg-yellow-300 w-fit">이번 시간에 무엇을</p>
      <p className="bg-yellow-300 w-fit">배울까?</p>
    </div>

    <Image
        src={'/image/t1.png'}
        alt=''
        width={500}
        height={500}
      />

    </div>

    </section>

    <section className='translate-x-10 translate-y-10'>
    <Image
        src={'/image/t2.png'}
        alt=''
        width={150}
        height={100}
      />
      </section>
    </div>

    <footer className="text-black mt-4">
    <p className="font-bold">미션 진행률: 10%</p>
    <ProgressBar value={10} />
      <div className="flex justify-end">
        {/* <TiArrowBack className="cursor-pointer"   size={100} onClick={() => router.push('/mathH/first/activity')} /> */}
        <TiArrowForward  className="cursor-pointer"  size={100} onClick={() => router.push('/mathH/second/M1/one')} />
      </div>
      
    </footer>
    </>
  )
}