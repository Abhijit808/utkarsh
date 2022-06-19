import React from 'react'
import Button from '@mui/material/Button';
import Footer from "../components/Homepagefooter"
import image from "../images/images.jpeg"
import"../styles/Homepage.css"
function Home() {
  return (
   <>
   <main className="main-container">
    <section className="hero">
      <div className="btn_section">
      <h1 className='mainheading'>
        magazines
      </h1>
      <p className="mainpara">
      Create a great understanding with every news,Add more moments with good reading.
      </p>
      <Button variant="contained" size='large'>SEE ALL MAGAZINES</Button>
      </div>
      <div className="imgsection">
        <img src={image} alt="i" />
      </div>
    </section>
   </main>
   <Footer/>
   </>
  )
}

export default Home