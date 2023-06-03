// import './Card'
// import './Card.css'
// import { useState } from 'react';

// const Card=(props)=>{
//     //const greetings=' React';
//     const [name,setName]=useState('React..')
//     //console.log("props",props)
//     const updateName=(value)=>{
//         setName(value)
//     }
//     return (<>
//         <h1>I am Card{props.name} {name}</h1>
//         <button onClick={()=>setName('JS')}>
//             Update</button></>
//         )
// }
import axios from "axios"
import { useState } from "react"
const Card=(props)=>{
    const[name,setName]=useState([])
    const GetData=async ()=>{
        const data=await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('data',data.data)
        setName(data.data)

    }
    return(
        <>
        <button onClick={()=>GetData()}>get data</button>
        {/* {<p>{JSON>stringify(name)}} */}
        {
            name.map((value)=>{
                return <p>{value.title}</p>
            })
        }
        <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        </>
    )
}

export default Card