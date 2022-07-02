import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../DataContext/DataContext'
import './Frame_8.css'
import coral from './img/coral.png'

import ott from './img/ott.png'

const Frame_8 = () => {
    const {savat}=useContext(DataContext)
    const hisob= savat.reduce((a,b)=>a+b.narx*b.count,0)
    return (
        <>
            <div className="coral">
                <div className="infor">
                    <div className="tm">
                        <img src={coral} alt="" />
                        <h3 className='tm'>And T&M Production</h3>
                    </div>
                    <div className="pay">
                        <p>Cart</p><p></p>
                        <p>Information</p><p></p>
                        <p>Shiping</p><p></p>
                        <p>Payment</p><p></p><br /><br />
                    </div>
                    <div className="city">
                        <div className="email">
                            <p>Contact information</p>
                            <input className='emm' type="email" placeholder='Email' /><br />
                            <input type="checkbox" />
                        </div>
                        <div className="first">
                            <h4>Shipping address</h4>
                            <div className="last">
                                <input type="text" placeholder='Frist name' />
                                <input type="text" placeholder='Last name' />
                            </div><br />
                            <div className="address">
                                <input type="text" placeholder='Company (optional)' /><br /> <br />
                                <input type="address" placeholder='Address' /><br /> <br />
                                <input type="text" placeholder='Apartment, suite, etc (optional)' /><br /> <br />
                                <input type="text" placeholder='City' />
                            </div>  <br />
                            <div className="select">
                                <select className='usaa' name="" id="">
                                    <option value="INDIA">India </option>
                                    <option value="USA">USA</option>
                                    <option value="RUSSIAN">RUSSIAN</option>
                                    <option value="ITALY">ITALY</option>
                                </select>
                                <select className='usaa' name="" id="">
                                    <option value="INDIA">State</option>
                                    <option value="USA">USA</option>
                                    <option value="RUSSIAN">RUSSIAN</option>
                                    <option value="ITALY">ITALY</option>
                                </select>
                                <input type="password" placeholder='PIN code' />
                            </div><br />
                            <input className='phh' type="text" placeholder='Phone (optional)' /><br /><br />
                            <div className="ph">
                                <NavLink to={'/frame9'}> <button>CONTINUE TO </button></NavLink>
                                <p>Return to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total">
                    {
                        savat.map((val) => (
                            <div key={val.id}>
                                <div className="reff">
                                    <img className='ott' src={val.img} alt="" />
                                    <p>{val.name}<br />
                                        /Acrylic on canvas/<span className='sizedecaration'>{val.size}</span><br /><br />
                                        Height 30 Inches x Width 30 <br />
                                        inches / Comes without  frame / Hand Painted By Artist
                                    </p>
                                </div>
                                <hr />
                                <div className="subtotal">
                                    <p>
                                        Subtotal <br /><br />
                                        Shiping charge
                                    </p>
                                    <p>
                                      $  {val.narx} <br /><br />
                                        Calculated At next step
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                    <hr />
                    <div className="amout">
                        <h1>Total Amount:$ {hisob} </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frame_8