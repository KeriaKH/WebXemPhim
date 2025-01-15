import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RandomAnime from '../Component/RandomAnime';
import TopAnime from '../Component/TopAnime';
import { getAnime, getListChapter } from '../Service/Anime';
import VideoPlayer from '../Component/VideoPlayer';


export default function WatchPage({ AnimeList }) {
    const { id } = useParams()
    const { tap } = useParams()
    const [Anime, setAnime] = useState()
    const [Chapters, setChapters] = useState()
    useEffect(() => {
        getAnime(id).then((data) => {
            setAnime(data);
        })
        getListChapter(id).then((data) => {
            setChapters(data)
        })
    }, [id])

    const nav = useNavigate()
    const change = (index) => () => {
        nav(`/Phim/${id}/${index + 1}`)
    }

    if (!Anime) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-white text-xl">Loading...</p>
            </div>
        );
    }

    if (!Chapters || !Chapters.length) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-white text-xl">
                    {Chapters ? "No Chapters Available" : "Loading Chapters..."}
                </p>
            </div>
        );
    }

    if (!Chapters[tap - 1]) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-white text-xl">Invalid Chapter Selection</p>
            </div>
        );
    }
    return (
        <div className='justify-center flex h-full'>
            <div className='w-[60vw] flex bg-custom_black justify-between p-5'>
                <div className='w-[70%] h-full '>
                    <VideoPlayer url={Chapters[tap - 1].URL} />
                    <div className='w-full p-3 flex bg-slate-800 mt-10'>
                        {Array.from({ length: Chapters.length }, (_, index) => (
                            <button onClick={change(index)} key={index} className={`p-3 text-white ml-2 hover:bg-slate-500 duration-300 ${index === tap - 1 ? "bg-slate-500" : "bg-slate-950"}`}>{index + 1}</button>
                        ))}
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
