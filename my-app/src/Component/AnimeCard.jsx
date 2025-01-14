import React from 'react'
import { Link } from 'react-router-dom'

export default function AnimeCard({ Anime }) {
    return (
        <Link to={`phim/${Anime._id}`}>
            <div className='relative'>
                <img src={Anime.Img} alt='img' draggable="false" className='w-full h-auto rounded-sm bg-cover'></img>
                <p className='absolute top-2 left-1 p-2 text-yellow-300 rounded-2xl bg-black bg-opacity-70  flex items-start justify-end text-xs font-semibold z-10'>★ {Anime.Rating}</p>
                <p className='absolute top-2 right-1 p-1 text-white rounded-full bg-red-600 flex items-start justify-end text-xs font-semibold z-10'>{Anime.Chapters} TẬP</p>
                <p className='absolute p-2 text-white font-semibold inset-0 items-end justify-center flex bg-black bg-opacity-30 text-center text-xs'>{Anime.Name}</p>
            </div>
        </Link>
    )
}
