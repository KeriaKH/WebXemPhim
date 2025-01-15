import React, { useEffect, useState } from 'react';
import DetailofAnime from '../Component/DetailofAnime';
import RandomAnime from '../Component/RandomAnime';
import TopAnime from '../Component/TopAnime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { getAnime } from '../Service/Anime';


export default function AnimeDetail({ AnimeList }) {
  const { id } = useParams()
  const [Anime, setAnime] = useState()
  useEffect(() => {
    getAnime(id).then((data) => {
      setAnime(data);
    })
  }, [id])

  if (!Anime) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-white text-xl">Loading...</p> {/* Display a loading message */}
      </div>
    );
  }
  return (
    <div className='justify-center flex h-full'>
      <div className='w-[60vw] flex bg-custom_black justify-between p-5'>
        <div className='w-[70%] h-full '>
          <DetailofAnime Anime={Anime} />
          <div className='p-5 flex-col items-center flex w-1/4 space-y-5'>
            <div className='flex'>
              <FontAwesomeIcon icon={faFileLines} className='text-lime_green size-5' />
              <p className='text-lime_green ml-2 font-light'>Thông tin phim</p>
            </div>
            <hr className='w-full bg-lime_green border-0 h-[3px] rounded-sm' />
          </div>
          <div className='w-full bg-slate-700 p-5'>
            <ul className='text-white text-[13px] space-y-3'>
              <li><strong>Số tập:   </strong>{Anime.Chapters}</li>
              <li><strong>thể loại: </strong>{Anime.Category}</li>
              <li><strong>studio:   </strong>{Anime.Studio}</li>
            </ul>
          </div>
        </div>
        <div className='w-[28%] space-y-5'>
          <RandomAnime AnimeList={AnimeList} />
          <TopAnime AnimeList={AnimeList} />
        </div>
      </div>
    </div>
  );
}
