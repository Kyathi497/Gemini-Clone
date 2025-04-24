import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaPlus, FaQuestion  } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
// import { FaPlus, FaMessage } from "react-icons/fa";
const SideBar = () => {
  const [extended, setExtended] = React.useState(false);

  return (
    <div className='min-h-screen inline-flex flex-col justify-between bg-[#e4e7ed] py-[25px] px-[15px]'>
      <div>
      <IoMdMenu onClick={()=> setExtended(prev => !prev)} className='text-3xl block cursor-pointer mt-1 ml-1.5'/>
      <div className='mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[15px] text-[14px] text-gray-500 cursor-pointer bg-gray-300 rounded-full'>
      <FaPlus className='text-2xl'/>
      {extended ? <p>New Chat</p> :null}
      </div>
      {extended && (<div className='flex flex-col'>
            <p className='mt-7 mb-5'>Recent</p>

            <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300'>
                <FaMessage className='text-2xl'/>
                <p>what is java?</p>
            </div>
            </div>)}
      </div>

      <div className='flex flex-col'>

          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300'>
          <FaQuestion className='text-2xl'/>
          {extended && <p>Help</p>}
          </div>

          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300'>
          <MdHistory className='text-2xl'/>
          {extended && <p>Activity</p>}
          </div>

          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300'>
          <IoSettings className='text-2xl'/>
          {extended && <p>Setting</p>}
          </div>

          
      </div>
    </div> 
  )
}

export default SideBar
