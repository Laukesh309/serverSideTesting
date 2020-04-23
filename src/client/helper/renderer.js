import React from 'react'

import {renderToString} from "react-dom/server"
import Home from "../component/Home"
const renderer =()=>{
    const content = renderToString(<Home/>)
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