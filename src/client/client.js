import React from "react"
import ReactDom from "react-dom"

import Home from "../client/component/Home"


ReactDom.hydrate(<Home/>,document.querySelector("#root"))


