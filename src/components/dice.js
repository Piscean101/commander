import { useState } from "react";
function Dice() {
    var [roll,setRoll] = useState(6);
    var [rollCount,setRollCount] = useState(1);
    function handleDice(rollCount) {
        let hold = new Array(Math.abs(rollCount)).fill();
        let result = hold.map((e,i) => {return Math.ceil(Math.random()*roll)});
        alert(`The result of the dice roll is:\n${result.join('...')}`);
    }
    return(
        <div className="dice">
        <button onClick={() => {handleDice(rollCount)}}>Roll d{roll}</button>
        <input className="diceRange" type="range" min="6" max="20" defaultValue="6" onChange={(e) => setRoll(e.target.value)}></input>
        <p>
            <input type="number" min="1" max="9" defaultValue="1" onChange={(e) => {setRollCount(e.target.value)}}></input>
            Time(s)
        </p>
        <p>{rollCount} rollcount</p>
        </div>
    )
}

export default Dice;