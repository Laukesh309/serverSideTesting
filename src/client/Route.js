import {Route} from "react-router-dom"
import Home from "./component/Home"
import User from "./component/User"
import React from 'react'

const route =()=>{
    return(
        <div>
            <Route exact path = "/" component ={Home}/>
            <Route export path = "/users" component ={User}/>
        </div>
    )
}
export default route