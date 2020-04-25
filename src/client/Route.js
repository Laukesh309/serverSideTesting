import {Route} from "react-router-dom"
import Home from "./pages/Home"
import User from "./pages/User"
import React from 'react'
import userReducer from "./reducer/userReducer"

// const route =()=>{
//     return(
//         <div>
//             <Route exact path = "/" component ={Home}/>
//             <Route export path = "/users" component ={User}/>
//         </div>
//     )
// }
// export default route

export default [
    {
        path:"/",
        ...Home,
        exact:true
    },
    {
       ...User,     
        path:"/users",
        
    }
]