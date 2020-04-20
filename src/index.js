const express = require('express')
const Home = require('./client/component/Home').default
const renderToString = require('react-dom/server').renderToString
const app = express();


app.get("/",(req,res)=>{

    const content = renderToString(<Home/>)
    res.send(content)
    
})

app.listen(3000,()=>{
    console.log("serverStarted")
})