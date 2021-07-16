import React from 'react';
import Game from './Game';
import GameRules from './GameRules';

const Home = () => {
    return (
        <div className="game-wrapper">
            <GameRules/>
            <Game/>
        </div>
    );
};

export default Home;