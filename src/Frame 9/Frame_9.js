import React from 'react'
import './Frame_9.css'
import laroc from './img/coral.png'
import suv from './img/ott.png'

const Frame_9 = () => {
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
                    <div className="ches">
                        <img className='suv' src={suv} alt="" />
                        <p>Happy coral reef $5,000<br />
                            /Acrylic on canvas/ “30 x 30"<br /><br />
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
                            $5,000 <br /><br />
                            Calculated At next step 
                        </p>
                    </div>
                    <hr />
                    <div className="amoutt">
                        <h1>Total Amount: </h1>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Frame_9 