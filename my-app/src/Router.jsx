import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'
import AnimeDetail from './Page/AnimeDetail'
import WatchPage from './Page/WatchPage'


export default function Router({AnimeList}) {
  return (
      <Routes>
        <Route path='/' element={<HomePage AnimeList={AnimeList}/>} />
        <Route path="Phim/:id" element={<AnimeDetail AnimeList={AnimeList}/>}/>
        <Route path="/Phim/:id/:tap" element={<WatchPage AnimeList={AnimeList} />}/>
      </Routes>
  )
}
