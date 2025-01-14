import React from 'react'
import AnimeCard3 from './AnimeCard3'

export default function TopAnime({AnimeList}) {
    const Top=AnimeList.slice(0,5)
    return (
        <div className='w-full bg-slate-900 text-[13px] font-semibold space-y-3 p-[10px]'>
            <div className='text-white text-[15px] p-2 bg-custom-gradient w-fit rounded-lg font-semibold'>
              TOP ANIME
            </div>
            <div>
                <hr className='w-1/6 bg-lime_green border-0 h-[3px] rounded-sm'></hr>
                <hr className='bg-slate-200 bg-opacity-30 h-[1px] border-0'></hr>
            </div>
            <div className='space-y-5'>
                {Top.map((item)=>(
                    <AnimeCard3 Anime={item}/>
                ))}
            </div>
        </div>
    )
}
