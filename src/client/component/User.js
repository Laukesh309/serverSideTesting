import React, { Component } from 'react'

import {fetchUser} from "../action/index"
import {connect} from "react-redux"

class userList extends Component{
    componentDidMount(){
        this.props.fetchUser()
    }
    renderUser(){
        return this.props.users.map((user,index)=>{
            return <li key={index}>{user.name}</li>
        })
    }
    render(){
        return(
            <div>
                <div>Here is the Whole list of users</div>
                   <ul>{this.renderUser()}</ul>
            </div>

        )
    }
}
function mapStateToProps(state){
    console.log("this is serverside rendering",state)
    return {
        users:state.users
    }
}
function loadData(store){
   return store.dispatch(fetchUser())
}
export {loadData}
export default connect(mapStateToProps,{fetchUser})(userList)