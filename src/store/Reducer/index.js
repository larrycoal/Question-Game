import {combineReducers} from 'redux'
import playerReducer from './playerReducer'

const reducer = combineReducers({
player : playerReducer
})

export default reducer