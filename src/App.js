import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './component/Header'
import LoginPage from './component/LoginPage';
import Home from './component/Home'
import { useSelector } from 'react-redux';
const App = () => {
  const player = useSelector((state)=>state.player)
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/home" component={player.isAuthenticated?Home:LoginPage}/>
      </Switch>
    </>
  );
};

export default App;