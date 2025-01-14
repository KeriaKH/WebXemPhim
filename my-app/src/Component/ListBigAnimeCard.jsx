import React, { useState } from 'react'
import BigAnimeCard from './BigAnimeCard'

export default function ListBigAnimeCard({AnimeList}) {


  const [position, setPosition] = useState(0)
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const currentDelta = e.clientX - startX;
    setDeltaX(currentDelta);
  }

  const handleMouseUp = () => {
    setDragging(false);
    setDeltaX(0);
    if (deltaX < 0 && position < AnimeList.length-1)
      setPosition(position + 1)
    if (deltaX > 0 && position > 0)
      setPosition(position - 1)
  }
  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform duration-500 ease-in-out'
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translateX(-${position * 100}%)`,
        }}>
        {AnimeList.map((item) => (
          <div className='flex-shrink-0 w-full'>
            <BigAnimeCard Anime={item} />
          </div>
        ))}
      </div>
      <div className='absolute bottom-3 right-5 flex gap-2 bg-black bg-opacity-40 p-2'>
          {Array.from({ length: AnimeList.length }, (_, index) => (
            <div key={index} className={`size-3 rounded-full duration-500 shadow-xl ${index === position ? "bg-red-600" : "bg-white bg-opacity-40"}`}></div>
          ))}
        </div>
    </div>
  )
}
