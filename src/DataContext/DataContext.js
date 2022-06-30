import React,{useState} from "react";

export const DataContext = React.createContext();

const DataContextProvider =({children})=>{
    const [datamassiv,setDatamassiv]=useState([
        {
            id:0,
            img:'./img/imgcard.png',
            name:`Happy coral reef
            /Acrylic on canvas/ 
            `,
            narx:5000,
            size:'“30 x 30"',
            count:1,
            savat:false
        },
        {
            id:1,
            img:'./img/imgcard.png',
            name:`Happy coral reef
            /Acrylic on canvas/ 
            `,
            narx:8000,
            size:'“30 x 30"',
            count:1,
            savat:false
        },
        {
            id:2,
            img:'./img/imgcard.png',
            name:`Happy coral reef
            /Acrylic on canvas/ 
            `,
            narx:9000,
            size:'“30 x 30"',
            count:1,
            savat:false
        },
        {
            id:3,
            img:'./img/imgcard.png',
            name:`Happy coral reef
            /Acrylic on canvas/ 
            `,
            narx:7000,
            size:'“30 x 30"',
            count:1,
            savat:false
        },
        {
            id:4,
            img:'./img/imgcard.png',
            name:`Happy coral reef
            /Acrylic on canvas/ 
            `,
            narx:5000,
            size:'“30 x 30"',
            count:1,
            savat:false
        },
        {
            id:5,
            img:'./img/imgcard.png',
            name:`Happy coral reef
            /Acrylic on canvas/ 
            `,
            narx:5500,
            size:'“30 x 30"',
            count:1,
            savat:false
        },
        {
            id:6,
            img:'./img/imgcard.png',
            name:`Happy coral reef
            /Acrylic on canvas/ 
            `,
            narx:5000,
            size:'“30 x 30"',
            count:1,
            savat:false
        },
        {
            id:7,
            img:'./img/imgcard.png',
            name:`Happy coral reef
            /Acrylic on canvas/ 
            `,
            narx:4000,
            size:'“30 x 30"',
            count:1,
            savat:false
        },
    ])
    const savat = datamassiv.filter((val)=>val.savat ===true)
    const [modalvalue,setModalvalue]=useState([])
    const [addmass,setAddmass]=useState(savat)
    const [modalcard,setModalcard]=useState(false)
    console.log(savat);
    return(
        <DataContext.Provider value={{datamassiv,setDatamassiv,modalvalue,setModalvalue,modalcard,setModalcard,addmass,setAddmass}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;