import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {Login} from '../store/Action'
const LoginPage = (props) => {
    const[state, setState]=useState({})
    const dispatch = useDispatch()
    const handleLogin=(e)=>{
        e.preventDefault()
        if(state.userName === "gamer" && state.password === "password"){
            dispatch(Login())
           props.history.push("/home")
        }
    }
    return (
        <div className="login-page-wrapper">
            <form>
                <input 
                type="text"
                placeholder="Enter UserName : gamer"
                value={state.userName}
                onChange={(e)=>setState({...state,userName:e.target.value})}
                />
                 <input 
                type="password"
                placeholder="Enter Password : password"
                value={state.password}
                onChange={(e)=>setState({...state,password:e.target.value})}
                />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;