import React from 'react'

import {Route} from "react-router-dom" ;
import Home from "./component/Home" ;
import Users from "./component/users"
import users from './component/users';
export default ()=>{
    return (
        <div>
            <Route exact path ="/" component ={Home}/>
            <Route exact path = "/users" component ={users}/>
        </div>
    )
}