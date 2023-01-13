import React from 'react'
import mac from '../../../src/images/illustration-thank-you.svg'
import { Link, useLocation } from "react-router-dom";
import { Rating } from '../Data/Data';

const SelectedPage = () => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <>
      <section className='mainSection'>
        <div className='container'>
          <div className='content2'>
            <img src={mac} />
            <h2>{`You selected ${data} out of ${Rating.length} `}</h2>
            <h3>Thank you!</h3>
            <p>We appreciate you taking the time to give a rating. If you ever need more support,
              don’t hesitate to get in touch!</p>
            <Link to="/">
              <button className="btn ">Back</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default SelectedPage