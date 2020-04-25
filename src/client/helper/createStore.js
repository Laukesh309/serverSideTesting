import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducer from '../reducer/combineReducer';


export default ()=>{
    const store = createStore(reducer,{},applyMiddleware(thunk))
    return store
}