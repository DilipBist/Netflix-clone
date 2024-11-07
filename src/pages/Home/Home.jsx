import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../component/NavBar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../component/TitleCrads/TitleCard'
import Footer from '../../component/Footer/Footer'
import spinner from '../../assets/netflix_spinner.gif'
import ScrollTop from '../../component/scrollTop'

function Home() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, [])

  if (loading) {
    return (
      <div className="spinner">
        <img src={spinner} alt="" />
      </div>
    )
  }

  return (
    <div className='home'>
      <Navbar />

      <div className="hero">
        <img src={hero_banner} alt="bannerImg" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="heroTitle" className='caption-img' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque fugiat quod? Atque sit temporibus assumenda iure aliquid autem delectus!</p>
          <div className="hero-btns">
            <button className='btn '>
              <img src={play_icon} alt="playBtn" />
              Play
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="playBtn" />
              More Info
            </button>
          </div>
          <TitleCard />
        </div>
      </div>

      <div className="more-cards">
        <div id="blockbluster-movies">
        <TitleCard title={"Blockbuster Movies"} category={'top_rated'} />
        </div>
        <div id="popular-section">
          <TitleCard title={"Only on Netflix"} category={'popular'} />
        </div>
        <TitleCard title={'Upcoming Movies'} category={'upcoming'} />
        <TitleCard title={"Top pics for you"} />
      </div>

      <Footer />

      <ScrollTop />
    </div>
  )
}

export default Home