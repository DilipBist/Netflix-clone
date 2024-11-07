import React, { useEffect, useState } from 'react'
import right_arrow from '../assets/right-arrow.png'


function ScrollTop() {
    const [scrollbtnVisibel, setScrollbtnVisibel] = useState(false);

  const handleScrollVisibility = () =>{
    if (window.scrollY >= 80) {
        setScrollbtnVisibel(true);
    }
    else{
        setScrollbtnVisibel(false);
    }
  }
    const handleScrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollVisibility);

        return () => window.removeEventListener('scroll', handleScrollVisibility)
    },[])

  return (
    <div className={`scroll-top ${scrollbtnVisibel? 'showbtn' : ''}`} onClick={handleScrollTop}>
        <img src={right_arrow} alt="" className='right-arrow' />
      </div>
  )
}

export default ScrollTop