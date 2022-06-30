import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react"
import { DataContext } from "../DataContext/DataContext"

export const Modalcard=()=>{
    const [addbolien,setAddbolien]=useState(false)
    const {modalvalue,setModalvalue,modalcard,setModalcard,datamassiv,setDatamassiv,addmass,setAddmass}=useContext(DataContext)
   
    const modaldecr=()=>{
    
        setDatamassiv(datamassiv=>datamassiv.map((val)=>{
            return val.id===modalvalue.id ? {...val,count:val.count-1} : val
        }))
        setModalvalue({...modalvalue,count:modalvalue.count >1 ? modalvalue.count-1:modalvalue.count =1})
    }
    const modalincr=()=>{
        setDatamassiv(datamassiv=>datamassiv.map((val)=>{ return val.id === modalvalue.id ? {...val,count:val.count+1}:val}))
        setModalvalue({...modalvalue,count:modalvalue.count +1})
        
    }
    const addtocard=()=>{
         setAddbolien(true)
              setDatamassiv(datamassiv.filter((val)=>val.id ===modalvalue.id? val.savat=true:val))
              
        console.log(addmass);
    }
   const modalopen=()=>{
    setAddbolien(true)
    setModalcard(!modalcard)
   }
    return(
        <div className={modalcard ? "modal active" :"modal"}>
            <div className="modalcard">
                <div className="close" onClick={modalopen   }>x</div>
                <div className="modalcardhead">
                    <img src={modalvalue.img} alt="" />
                    <div className="modalcardheadtitle">
                        <h2>Purple plate corals</h2>
                        <hr />
                        <p>$ {modalvalue.narx}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatum?</p>
                        <h3>{modalvalue.name}</h3>
                        <h3>{modalvalue.size}</h3>
                        <hr />
                        <button >VIEW FULL DETAILS</button>
                        <hr />
                    </div>
                </div>
                <div className="modalcardbody">
                    <img src={modalvalue.img} alt="" className="img1" />
                    <img src={modalvalue.img} alt="" className="img2" />
                    <img src={modalvalue.img} alt="" className="img3" />
                    <div className="modalcardbodycounts">
                        <span>1 -item left</span>
                        <p>Qty:</p>
                        <div className="countgroup">
                            <button onClick={modaldecr}>-</button>
                            <p>{modalvalue.count}</p>
                            <button onClick={modalincr}>+</button>
                        </div>
                        <div className="btngroup">
                            <button onClick={addtocard}>Add to cart</button>
                            <button>Buy now</button>
                            <h2>$ {modalvalue.narx * modalvalue.count}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}