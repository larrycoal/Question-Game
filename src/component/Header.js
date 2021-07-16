import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import {Logout} from '../store/Action'
const Header = (props) => {
   const dispatch = useDispatch()
   const player = useSelector((state)=>state.player)
    const handleLogout= ()=>{
       dispatch(Logout())
       props.history.push("/")
    }
    return (
        <nav className="header">
            <div>Guess-Game</div>
            {
              player.isAuthenticated? <div onClick={handleLogout}>Logout <i class="fas fa-sign-out-alt"></i></div>:null
            }   
        </nav>
    );
};

export default withRouter( Header)