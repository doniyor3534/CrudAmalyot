import React from 'react';
import './About.css';
import { flexbox } from '@mui/system';
// img 
import maxsulot from "./img/mahsulot.png"
import call from "./img/call.png"
import face from "./img/face.png"
import insta from "./img/insta.png"
import sms from "./img/sms.png"
import photo1 from "./img/photo1.png"
import photo2 from "./img/photo2.png"
import photo3 from "./img/photo3.png"



let maxsulotlar = [
    {
        id:0,
        img:maxsulot,
        name:"Happy coral reef",
        nom:"Acrylic on canvas",
        narx:5000,
        text:`Abstract Painting, Watercolor Art And Mixed Media Original Fine Art On Canvas`,
        size:'"30 x 30"',
        delis:"MATERIALS  (Mixed media on canvas. Ready to hang).",
        imption:"Healthy coral reefs found in a cave during a dive in Nilaveli, in Trinco, Srilanka, prompted me to paint this.",
    }
]
const Women = () => {
  return (
    <>
        <div className='Happyreef'>
        {
            maxsulotlar.map((item)=>(
                <div className='reef' key={item.id}>
                    <div className="photo">
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                    <div className="photo_titel">
                        <h1>{item.name}</h1>
                        <div className='titel'>
                            <h3 className='nom'>{item.nom}</h3>
                            <h2 className='narx'>₹ {item.narx}</h2>
                            <p className='text'>{item.text}</p>
                            <h3 className='size'>Size:      {item.size}</h3>
                            <p className='delis'><h4>Details:</h4> {item.delis}</p>
                            <p className='imption'><h4>Inspiration:</h4> {item.imption}</p>
                            <div className="soni">
                            <p className='text'>Not framed</p>
                            <h3 className='qty'>Qty:</h3>
                            <div className="count">
                                <button className='minus'>-</button>
                                <input disabled type="number"/>
                                <button className='plus'>+</button>
                            </div>
                                <div className='likees'>
                                        <button>Add to cart</button>
                                        <button>❤️</button>
                                </div>
                            </div>
                        </div> 
                        <div className="link">
                            <img src={call} alt="" />
                            <img src={sms} alt="" />
                            <img src={insta} alt="" />
                            <img src={face} alt="" />    
                        </div>   
                            <button className='bay'>Buy now</button>
                    </div>
                </div>
            ))
        }
        </div>
        <div className="you_like">
            <h1>You may also like </h1> 
            <div className="cards">
                <div className="card1">
                    <img src={photo1} alt="" />
                    <div className='likees'>
                        <button>Add to cart</button>
                        <button>❤️</button>
                    </div>
                </div>    
                <div className="card2">
                    <img src={photo2} alt="" />
                    <div className='likees'>
                        <button>Add to cart</button>
                        <button>❤️</button>
                    </div>
                </div>    
                <div className="card3">
                    <img src={photo3} alt="" />
                    <div className='likees'>
                        <button>Add to cart</button>
                        <button>❤️</button>
                    </div>
                </div>    
            </div>   
        </div> 
    </>
  )
}
export default Women;