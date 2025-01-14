import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Component/Header';
import Router from './Router';
import Footer from './Component/Footer';
import { getListAnime } from './Service/Anime';
export default function App() {
  const [AnimeList, SetAnimeList] = useState([])

  useEffect(() => {
    getListAnime().then((data) => {
      SetAnimeList(data)
    })
  }, [])
  return (
    <BrowserRouter >
      <Header></Header>
      <Router AnimeList={AnimeList}></Router>
      <Footer />
    </BrowserRouter>
  )
}
