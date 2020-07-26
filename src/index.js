const express = require('express')
const React = require("react")
const Home = require('./client/component/Home').default
const renderToString = require('react-dom/server').renderToString
const app = express();

app.use(express.static('public'))
app.get("/",(req,res)=>{

    const content = renderToString(<Home/>)

    const html =`<html>
      <head>

      </head>
      <body>
           <div id="root">${content}</div>
           <script src ="bundle.js"></script>
      </body>
    </html>`
    res.send(html)
    
})

app.listen(3000,()=>{
    console.log("serverStarted")
})