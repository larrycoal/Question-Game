import React,{useState} from 'react';

const GameRules = () => {
    const [display,setDisplay]= useState(true)
    return (
        <div 
        className="gamerules"
        style={{display:!display? "none":null}}
        >
            <div className="container">
            <h1>How to Play</h1>
            <ul>
                <li>Player one submit a word</li>
                <li>Player two attempts to guess this word</li>
                <li>Player can ask questions to aid his guesses</li>
                <li>Player can ask up to 20 question</li>
                <li>Player one answers YES/NO to question asked</li>
                <li>Player two can at any point take a guess</li>
            </ul>
            <button 
            onClick={()=>setDisplay(false)}
            >Start</button>
            </div>
        </div>
    );
};

export default GameRules;