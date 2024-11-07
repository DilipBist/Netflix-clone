import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import SearchMovie from './pages/SearchMovie/SearchMovie'
import TvShows from './pages/TvShows/TvShows'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/player/:id' element={<Player/>}/>
      <Route path='/search' element={<SearchMovie/>}/>
      <Route path='/tvshows' element={<TvShows/>}/>
    </Routes>
    </>
  )
}

export default App