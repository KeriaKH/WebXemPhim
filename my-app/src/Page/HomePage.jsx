import React, { useEffect, useState } from 'react';
import AnimeCard2 from '../Component/AnimeCard2';
import ListAnime from '../Component/ListAnime';
import ListBigAnimeCard from '../Component/ListBigAnimeCard';
import RandomAnime from '../Component/RandomAnime';
import TopAnime from '../Component/TopAnime';

export default function HomePage({AnimeList}) {

  return (
    <div className='justify-center flex h-full'>
      <div className='w-[60vw] p-5 flex flex-col bg-custom_black h-full'>
        <ListAnime AnimeList={AnimeList} />
        <div className='flex justify-between mt-5'>
          <div className='w-[70%]'>
            <ListBigAnimeCard AnimeList={AnimeList} />
            <div className='text-white text-[18px] p-2 bg-custom-gradient w-fit rounded-lg font-semibold mt-4'>
              DANH SÁCH ANIME
            </div>
            <div className='mt-4 grid grid-cols-5 gap-4'>
              {AnimeList.map((item) => (
                <AnimeCard2 Anime={item} />
              ))}
            </div>
            <button className='w-full text-white bg-slate-900 mt-4 p-2 font-bold text-[18px] rounded hover:text-slate-700 duration-200'>XEM THÊM...</button>
          </div>
          <div className='w-[28%] space-y-5'>
              <RandomAnime AnimeList={AnimeList}/>
              <TopAnime AnimeList={AnimeList}/>
          </div>
        </div>
      </div>
    </div>
  )
}
