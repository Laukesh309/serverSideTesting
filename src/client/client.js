import 'babel-polyfill'
import React from 'react'
import ReactDom from "react-dom"
import {BrowserRouter} from "react-router-dom"
import Route from "./Route"

import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import reducer from "./reducer/combineReducer"

const store = createStore(reducer,{},applyMiddleware(thunk))
ReactDom.hydrate(<Provider store={store}>
                 <BrowserRouter>
                      <Route/>
                      </BrowserRouter>
                      </Provider>,document.getElementById("root"))