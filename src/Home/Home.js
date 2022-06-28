import React, { useContext } from 'react';
import { DataContext } from '../DataContext/DataContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';



const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
    const { datamassiv, setDatamassiv } = useContext(DataContext)
    return (
        <div className='home'>
            <div className="homesec1">
                <div className="homesec1card">
                    <h2>Uma's Paintings</h2>
                    <p>Check out our lead protagonist Uma’s paintings here.
                        If you love them, get a hand painted one from her</p>
                </div>
            </div>
            <hr />
            <div className="tillesec1">
                <h2>50%</h2>
                <h5> of the money generated will be spent on coral rehabilitation. This is our pledge.</h5>
            </div>

            <div className="homesec2">
                <div className="left">
                    <h3>ABOUT UMA MANI</h3>
                    <p>A filmmaker's journey with Uma, a certified scuba diver, exploring the underwater world and the threat to coral reefs.

                        A homemaker from Tamil Nadu, who, through her paintings, has been trying to draw public attention to the devastating effects of climate change on marine life and the coastal communities.
                        It is, in fact, her love for corals that inspired Uma to learn how to swim, dive and paint in her 50s</p>
                    <button>Watch Video</button>
                </div>
                <div className="right">
                    <img src="./img/homesec2.png" alt="" />
                </div>
            </div>
            <div className="homesec3cards">
                {
                    datamassiv.map((val) => (
                        <div className="homesec3card" key={val.id}>
                            <img src={val.img} alt="" />
                            <div className="cardhover">
                                <h3>{val.name}</h3>
                                <h2>$ {val.narx}</h2>
                                <button className='quick'>quick review</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="homesec4">
                <div className="homesec4title">
                    <h1>best selling paintings</h1>
                </div>
                <div className="homesec4crud">
                    <div className="homesec4crudleft">
                        <img src={datamassiv[1].img} alt="" />
                    </div>
                    <div className="homesec4crudright">
                        <h3>Happy coral reef</h3>
                        <h5>Acrylic on canvas</h5>
                        <p>Size</p>
                        <div className="sizes">
                            <button>{datamassiv[1].size}</button>
                            <button>"11x17"</button>
                        </div>
                        <p>Not Framed</p>
                        <h5>$ {datamassiv[1].narx * datamassiv[1].count}</h5>
                        <p>Qty:</p>
                        <div className="countgroup">
                            <button onClick={() => setDatamassiv([...datamassiv, datamassiv[1].count > 1 ? datamassiv[1].count-- : datamassiv[1].count])}>-</button>
                            <h6>{datamassiv[1].count}</h6>
                            <button onClick={() => setDatamassiv([...datamassiv, datamassiv[1].count++])}>+</button>
                        </div>
                        <div className="addgroup">
                            <button>Add To Card</button>
                            <button><FavoriteIcon /></button>
                        </div>
                        <button className='buynow'>BUY NOW</button>
                    </div>
                </div>
                <div className="homesec4crud">
                    <div className="homesec4crudright">
                        <h3>Purple plate corals</h3>
                        <h5>Acrylic on canvas</h5>
                        <p>Size</p>
                        <div className="sizes">
                            <button>{datamassiv[0].size}</button>
                            <button>"11x17"</button>
                        </div>
                        <p>Not Framed</p>
                        <h5>$ {datamassiv[0].narx * datamassiv[0].count}</h5>
                        <p>Qty:</p>
                        <div className="countgroup">
                            <button onClick={() => setDatamassiv([...datamassiv, datamassiv[0].count > 1 ? datamassiv[0].count-- : datamassiv[0].count])}>-</button>
                            <h6>{datamassiv[0].count}</h6>
                            <button onClick={() => setDatamassiv([...datamassiv, datamassiv[0].count++])}>+</button>
                        </div>
                        <div className="addgroup">
                            <button>Add To Card</button>
                            <button><FavoriteIcon /></button>
                        </div>
                        <div className="soldcard">
                            <button className='sold'>SOLD</button>
                            <NotificationsActiveIcon />
                        </div>
                    </div>
                    <div className="homesec4crudleft">
                        <img src={datamassiv[0].img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;