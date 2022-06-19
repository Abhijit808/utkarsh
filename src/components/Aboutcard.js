import React from 'react'
import cardimg_1 from '../images/images (1).jpeg';
import cardimg_2 from '../images/IMG-20220616-WA0016.jpg';
import '../styles/Aboutpage.css'
const Aboutcard = () => {
  return (
    <>
      <section className="card flex">
        <div className="card_img">
          <img src={cardimg_1} alt="" />
        </div>
        <div className="information center">
          <p className="mainpara w_color ">
            Pendekanti Institute of Management (PIM) is established in 1991 and is the youngest among the academic institutions started by Vasavi Academy of Education (VAE).
            Pendekanti institute of management  is one of the top colleges for MBA in Hyderabad
            In PIM we have  great teaching  faculty and a very good and favourable enviornmet for students to grow and  be ready for the corporate competitive world.
          </p>
        </div>
      </section>
      <section className="card flex r_reverse">
        <div className="card_img">
          <img src={cardimg_2} alt="" />
        </div>
        <div className="information center">
          <p className="mainpara w_color ">
            PIM times is a student oriented magazine which represents the work of students of this educational institution  and general information which is helpful for our career.
            We also have our faculty member's  enlighting us with some wonderful articles every month
            Not only does our pim time has education related stuff but also some really good entertainment column which can be enjoyed by everyone.

          </p>
        </div>
      </section>
    </>
  )
}

export default Aboutcard