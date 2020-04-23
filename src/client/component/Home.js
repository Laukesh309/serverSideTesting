import React from 'react'

const Home =()=>{
    return(
        <div>
        <h1>
            This is ServerSideRendering
            </h1>
            <button onClick={()=>{
                console.log("this is onclick function")
            }}>PressMe</button>
        </div>
    )
}

export default Home