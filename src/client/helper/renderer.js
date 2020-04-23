import React from 'react'
import {StaticRouter} from "react-router-dom"
import {renderToString} from "react-dom/server"
import Route from "../Route"
const renderer =(req)=>{
    const content = renderToString(
        <StaticRouter location ={req.path} context={{}}>
          <Route/>
        </StaticRouter>)
    return `<html>
               <head></head>
               <body>
                 <div id ="root">${content}</div>
                 <script src ="bundle.js"></script>
              </body>
          </html>
    `
}
export default renderer