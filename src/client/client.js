import React from 'react'
import ReactDom from "react-dom"
import {BrowserRouter} from "react-router-dom"
import Route from "./Route"
ReactDom.hydrate(<BrowserRouter>
                      <Route/>
                      </BrowserRouter>,document.getElementById("root"))