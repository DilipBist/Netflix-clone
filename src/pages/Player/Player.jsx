import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Player() {

  const navigate = useNavigate();


  let { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    published_at: "",
    key: null,
    type: ""
  })

  const [errorMessage, setErrorMessage] = useState("");

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGFkMmYzYzg4NjM0OWVmMDdjZGE2NzQyODdiYTUxMyIsIm5iZiI6MTczMDg2NDg4Ni45MTYwNDM1LCJzdWIiOiI2NzJhZTVhYjU5OWRhMjg5ODA5NTQ0ZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4JOnGsNhSmY3p7HcpJ8muxkemwWgv1-H2g7bEVI5MEA'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          setErrorMessage("Trailer not available for this movie.");
        }
      })
      .catch(err => {
        console.error(err);
        setErrorMessage("Failed to load trailer.");
      });
  }, [])
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="icon" title='Go back'
        onClick={() => { navigate(-1) }}
      />
      {errorMessage ? (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          frameBorder="0"
          allowFullScreen
          title='Trailer'
        ></iframe>
      )}
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player