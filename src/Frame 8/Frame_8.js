import React from 'react'
import './Frame_8.css'
import coral from './img/coral.png'
import {AiOutlineRight} from 'react-icons/ai'
import ott from './img/ott.png'

const Frame_8 = () => {
  return (
    <>
        <div className="coral">
            <div className="infor">
                <div className="tm">
                    <img src={coral} alt="" />
                    <h3 className='tm'>And T&M Production</h3>
                </div>
                <div className="pay">
                    <p>Cart</p><p>{AiOutlineRight}</p>
                    <p>Information</p><p>{AiOutlineRight}</p>
                    <p>Shiping</p><p>{AiOutlineRight}</p>
                    <p>Payment</p><p>{AiOutlineRight}</p><br /><br />
                </div>
                <div className="city">
                    <div className="email">
                        <p>Contact information</p>
                        <input className='emm' type="email" placeholder='Email'/><br />
                        <input type="checkbox" />
                    </div>
                    <div className="first">
                        <h4>Shipping address</h4>
                        <div className="last">
                            <input type="text" placeholder='Frist name'/>
                            <input type="text" placeholder='Last name'/>
                        </div><br />
                        <div className="address">
                            <input type="text" placeholder='Company (optional)'/><br /> <br />
                            <input type="address" placeholder='Address'/><br /> <br />
                            <input type="text" placeholder='Apartment, suite, etc (optional)'/><br /> <br />
                            <input type="text" placeholder='City'/>
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
                                <input type="password" placeholder='PIN code'/>
                           </div><br />
                           <input className='phh' type="text" placeholder='Phone (optional)'/><br /><br />
                          <div className="ph">
                                <button>CONTINUE TO </button>
                                <p>Return to cart</p>
                          </div>
                    </div>
                </div>
            </div>
            <div className="total">
                    <div className="reff">
                        <img className='ott' src={ott} alt="" />
                        <p>Happy coral reef $5,000<br />
                            /Acrylic on canvas/ “30 x 30"<br /><br />
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
                            $5,000 <br /><br />
                            Calculated At next step 
                        </p>
                    </div>
                    <hr />
                    <div className="amout">
                        <h1>Total Amount: </h1>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Frame_8