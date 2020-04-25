import {Route} from "react-router-dom"
import Home from "./component/Home"
import User,{loadData} from "./component/User"
import React from 'react'

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
        component:Home,
        exact:true
    },
    {
        loadData,  
        path:"/users",
        component:User,
    }
]