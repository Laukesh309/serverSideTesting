import 'babel-polyfill'
import express  from "express"
import renderer from "./client/helper/renderer"
import {createStore} from "redux"
import reducer from "./client/reducer/combineReducer"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
const app = express()

app.use(express.static("public"))
app.get("*",(req,res)=>{
    const store = createStore(reducer,{},applyMiddleware(thunk))
    res.send(renderer(req,store))
    
})

app.listen(3000,()=>{
    console.log("serverStarted")
})