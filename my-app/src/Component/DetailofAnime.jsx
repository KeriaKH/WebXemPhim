import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DetailofAnime({Anime}) {
  const nav=useNavigate()
  const watch=()=>{
    nav(`${1}`)
  }
  return (
    <div className='w-full h-[350px] relative'>
      <img src={Anime.BigImg} alt="img" className='absolute h-full w-full object-cover object-top rounded' />
      <div className='absolute w-full h-full bg-black bg-opacity-60'>
        <div className='p-5 w-full absolute top-7 flex justify-between'>
          <div className=' w-[25%]'>
            <div className='relative'>
              <img src={Anime.Img} alt="img" />
              <button onClick={watch} className='absolute bottom-5 w-full text-white text-[20px] bg-red-600 bg-opacity-80 p-2'>XEM PHIM</button>
            </div>
          </div>
          <div className=' w-[70%] '>
            <h1 className='text-lime_green text-[30px] font-bold truncate mb-3'>{Anime.Name}</h1>
            <p className='text-white text-opacity-80 font-semibold text-[13px] overflow-y-scroll min-h-[150px] max-h-[150px] scrollable scroll-smooth'>{Anime.Describe}</p>
            <hr className='mt-3 h-[1px] border-0 bg-white bg-opacity-40' />
            <div className="relative size-10 mt-3">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-white text-opacity-20"
                  strokeWidth="4"
                ></circle>

                {/* Progress Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-lime_green"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset={10} // Điều chỉnh phần trăm ở đây
                  strokeLinecap="round"
                ></circle>
              </svg>

              {/* Percentage Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span className="text-center text-[15px] font-bold text-white">{Anime.Rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
