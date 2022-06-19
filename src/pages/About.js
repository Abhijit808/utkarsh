import React from 'react'
import Aboutcard from "../components/Aboutcard";
export const About = () => {
  return (
      <main className="About t_center ">
       <header className='header w_color'>
        about
       </header>
       <section className='content_section'>
       <Aboutcard/>
       </section>
      </main>
  )
}
export default About;