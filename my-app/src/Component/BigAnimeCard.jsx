import { faClapperboard, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BigAnimeCard({Anime}) {
    const nav=useNavigate()
    const xemphim=()=>{
        nav(`phim/${Anime._id}`)
    }
    return (
        <div className='w-full h-[350px] relative flex select-none'>
            <img
                src={Anime.BigImg}
                alt="img"
                draggable="false"
                onDragStart={(e) => e.preventDefault()} 
                className='h-full w-full object-cover object-top rounded'
            />
            <div className='absolute left-0 w-[60%] flex-col h-full p-5 flex gap-y-3 bg-black bg-opacity-50'>
                <h1 className='text-white font-semibold text-[28px] leading-tight'>{Anime.Name}</h1>
                <p className='font-semibold text-[15px] text-lime_green'>★ {Anime.Rating}</p>
                <p className='text-slate-200 font-semibold text-[15px] truncate'>{Anime.Describe}</p>
                <div>
                    <div className='flex items-center gap-x-2'>
                    <FontAwesomeIcon icon={faVideo} className='text-lime_green'/>
                    <p className='text-slate-200 font-semibold text-[15px]'>Studio: {Anime.Studio}.</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                    <FontAwesomeIcon icon={faClapperboard} className='text-lime_green'/>
                    <p className='text-slate-200 font-semibold text-[15px]'>Thể loại: {Anime.Category} </p>
                    </div>
                </div>
                <button onClick={xemphim} className='w-1/3 p-3 h-fit bg-red-600 text-white rounded-md hover:bg-slate-800 duration-300'>▶︎ Xem Phim</button>
            </div>
        </div>
    )
}
