import React from 'react'
import {StaticRouter} from "react-router-dom"
import {renderToString} from "react-dom/server"
import {Provider} from "react-redux"
import  {renderRoutes} from "react-router-config"
import Route from "../Route"
const renderer =(req,store)=>{
    const content = renderToString(
      <Provider store ={store}>
        <StaticRouter location ={req.path} context={{}}>
          <div>{renderRoutes(Route)}</div>
        </StaticRouter>
      </Provider>
       )
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