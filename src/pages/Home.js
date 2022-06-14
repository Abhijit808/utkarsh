import React from 'react'
import Button from '@mui/material/Button';
import image from "../images/images.jpeg"
import"../styles/Homepage.css"
function Home() {
  return (
   <>
   <main className="main-container">
     <header className='home_pageheader'>
      <h1 className='mainheading'>
        magazines
      </h1>
    </header>
    <section className="hero">
      <div className="btn_section">
      <Button variant="contained">SEE ALL MAGAZINES</Button>
      </div>
      <div className="imgsection">
        <img src={image} alt="i" />
      </div>
    </section>
   </main>
   </>
  )
}

export default Home