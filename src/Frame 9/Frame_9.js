import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../DataContext/DataContext'
import './Frame_9.css'
import laroc from './img/coral.png'
import suv from './img/ott.png'

const Frame_9 = () => {
    const {savat}=useContext(DataContext);
    const hisob= savat.reduce((a,b)=>a+b.narx*b.count,0)
    return (
        <>
            <div className="free">
                <div className="nagar">
                    <div className="mt">
                        <img src={laroc} alt="" />
                        <h3>And T&M Production</h3>
                    </div>
                    <div className="ment">
                        <p>Cart</p>
                        <p>Information</p>
                        <p>Shiping</p>
                        <p>Payment</p>
                    </div><br /><br /><br />
                    <div className="hari">
                        <div className="tact">
                            <p>
                                Contact <br />
                                <hr className='ciz' />
                                Ship to
                            </p>
                        </div>
                        <div className="gar">
                            <p>
                                9910452757 <br /><br />
                                D-000 Hari Nagar
                            </p>
                        </div>
                    </div><br /><br /><br />
                    <div className="paid">
                        <div className="method">
                            <p>Shiping Method</p>
                            <p>Free/ Paid</p>
                        </div>
                    </div><br />
                    <div className="ret">
                        <button>CONTINUE TO</button>
                        <p>Return to Information</p>
                    </div>
                </div>
                <div className="canvas">
                    {
                        savat.map((val) => (
                            <div>
                                <div className="ches">
                                    <img className='suv' src={val.img} alt="" />
                                    <p>{val.name} ${val.narx}<br />
                                        /Acrylic on canvas/{val.size}<br /><br />
                                        Height 30 Inches x Width 30 <br />
                                        inches / Comes without  frame / Hand Painted By Artist
                                    </p>
                                </div>
                                <hr />
                                <div className="subtotall">
                                    <p>
                                        Subtotal <br /><br />
                                        Shiping charge
                                    </p>
                                    <p>
                                        ${val.narx}<br /><br />
                                        Calculated At next step
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                    <hr />
                    <div className="amoutt">
                        <h1>Total Amount: $ {hisob}  </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frame_9 