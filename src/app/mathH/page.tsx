import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ParkIcon from '@mui/icons-material/Park';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';


export default function mathHHome(){


  return(
    <main className="text-black">

      <div className='flex flex-row px-52 py-12'>


    <ForwardOutlinedIcon fontSize='large' viewBox='0 0 24 24' width='40' height='40' className='text-teal-400 mx-10 mt-36'/>
    <div className='grid justify-items-center border-teal-400 border-solid border-8 mt-5'>
      <div className='mt-10 flex border-b-8'>
          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 4 24 24" width="40" height="40" data-testid="EditNoteIcon"><path d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"></path></svg>
          <p className="text-black font-semibold text-xl">
            학습할 내용
          </p>
       </div>
    
    <ul className='px-10 py-5'>
      <li className='mb-5'> <ParkIcon fontSize='small' className='mr-2'/>이차방정식과 이차함수의 관계</li>
      <li className='mb-5'> <ParkIcon fontSize='small' className='mr-2'/>이차방정식의 그래프와 직선의 위치관계</li>
      <li className='mb-5'> <ParkIcon fontSize='small' className='mr-2'/>이차함수의 최대, 최소</li>
    </ul>
    
    </div>

    <ForwardOutlinedIcon fontSize='large' className='text-teal-400 mx-10 mt-36'/>
    </div>
    </main>
  )

}