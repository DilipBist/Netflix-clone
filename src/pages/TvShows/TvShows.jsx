import React, { useEffect, useState } from 'react'
import './TvShows.css'
import Navbar from '../../component/NavBar/Navbar'
import ScrollTop from '../../component/scrollTop'
import { Link } from 'react-router-dom';

function TvShows() {

    const [tvshowData, setTvshowData] = useState([]);


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGFkMmYzYzg4NjM0OWVmMDdjZGE2NzQyODdiYTUxMyIsIm5iZiI6MTczMDg2NDg4Ni45MTYwNDM1LCJzdWIiOiI2NzJhZTVhYjU5OWRhMjg5ODA5NTQ0ZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4JOnGsNhSmY3p7HcpJ8muxkemwWgv1-H2g7bEVI5MEA'
        }
      };
      
     
      
     useEffect(()=>{

        fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(res => res.json())
        .then(res => setTvshowData(res.results))
        .catch(err => console.error(err));
     },[])
  return (
    <div>
        <Navbar/>
       <div className="tvshows">
       {
            tvshowData.map((tvshow)=>{
                return (
                    <Link to={`/player/${tvshow.id}`} className="tv-show">
                         <img src={`https://image.tmdb.org/t/p/w500`+tvshow.poster_path} alt={tvshow.name} loading='lazy'/>
                         <p className='center'>{tvshow.original_name}</p>
                         <p className='p'>{tvshow.first_air_date}</p>
                    </Link>
                )
            })
        }
       </div>
        <ScrollTop/>
    </div>
  )
}

export default TvShows