import React from 'react'

const Home =()=>{
    return(
        <div>

           <div style={{fontSize:"50px"}}> This is ServerSideRendering this is main list this is mail list of name.js</div>
           <button onClick={()=>console.log("this is client Side there")} style={{fontSize:"50px"}}>Press Me</button>
        </div>
    )
}

export default Home