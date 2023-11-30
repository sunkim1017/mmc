import ProgressBar from "@/component/PercentageBar";
import { TbChalkboard } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";


export default function AC1() {
  
  return (
    <>
    <div className="relative">
      <p className="text-black font-semibold text-left">활동하기</p>
    
      <div style={{marginTop: -10, marginLeft: 250}} className="z-0 absolute">
        <TbChalkboard size={550}/>
      </div>
      <p style={{marginTop:190, marginRight: 40}} className="text-center z-10 text-black text-3xl font-bold">
        {`<Misson 1>`}<br/>
        {`주어진 혈당 그래프에서`}<br/>
        {`이차함수를 찾아라!`}<br/>
      </p>


      <footer style={{marginTop: 200, marginLeft: 30}} className="text-black">
        
        <p className="font-bold">미션 진행률: 10%</p>
        <ProgressBar value={10}/>
        <div className="absolute" style={{  marginLeft: 900}}><TiArrowBack size={100} /></div>
        <div className="absolute" style={{  marginLeft: 1000}}><TiArrowForward size={100} /></div>
      </footer>


    </div>

    </>
  )
}
