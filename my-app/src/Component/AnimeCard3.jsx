import React from 'react'
import { Link } from 'react-router-dom'

export default function AnimeCard3 ({Anime}) {
  return (
    <div className='flex space-x-4'>
        <img src={Anime.Img} alt="img" className='w-1/4'/>
        <div className='space-y-2'>
            <Link to={`/phim/${Anime._id}`}><p className='text-white font-semibold text-sm hover:text-slate-600 duration-300'>{Anime.Name}</p></Link>
            <p className='font-semibold text-[15px] text-lime_green'>★ {Anime.Rating}</p>
        </div>
    </div>
  )
}
