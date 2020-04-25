import 'babel-polyfill'
import express  from "express"
import {matchRoutes} from 'react-router-config'
import Routes from "./client/Route"
import renderer from "./client/helper/renderer"
import createStore from "./client/helper/createStore"
import reducer from "./client/reducer/combineReducer"

const app = express()

app.use(express.static("public"))
app.get("*",(req,res)=>{
    const store = createStore()
     //console.log("this is store",store)
   console.log("\n\n\n this  is match route",matchRoutes(Routes,req.path))
     const promises = matchRoutes(Routes,req.path).map(({route})=>{
           return route.loadData ? route.loadData(store) : null;
        })
        Promise.all(promises).then((data)=>{
            // console.log("this is promise data",store.getState())
            res.send(renderer(req,store));
        });
    
})

app.listen(3000,()=>{
    console.log("serverStarted")
})