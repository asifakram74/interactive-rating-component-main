import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import star from '../../../src/images/icon-star.svg'
import { Rating } from '../Data/Data'

const Home = () => {
    const [rates, setRates] = useState()
    const [active, setActive] = useState("");


    const rateHandle = (id) => {
        setRates(id)
        setActive(id)
    }


    return (
        <>
            <section className='mainSection'>
                <div className='container'>
                    <div className='content'>
                        <img src={star} />
                        <h1>How did we do?</h1>
                        <p>Please let us know how we did with your support request. All feedback is appreciated
                            to help us improve our offering!</p>
                        <div className='rating'>
                            {
                                Rating?.map((item, index) => {
                                    return (
                                        <>

                                           <div className='mainActive'>
                                           <li key={index}  className={active == item.id ? " active " : "inactive"}>
                                                <button
                                                className="btns bbb"
                                                    onClick={() => rateHandle(item.id)}
                                                >
                                                    {item.count}
                                                </button>
                                            </li>

                                           </div>
                                        </>
                                    )
                                })

                            }
                        </div>
                        <Link to="/SelectedPage" state={{ data: rates }}>
                            <button className='btn'>SUBMIT</button>
                        </Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home