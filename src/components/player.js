import { useState } from "react";
import hp from './hp.png';

function Player(props) {
    var [life,setLife] = useState(props.start);
    var [softLife,setSoftLife] = useState(0);
    function handleLife(val) {
        setLife((e) => e += val);
    }
    function handleSoftLife(val) {
        setSoftLife((e) => e += val);
    }
    function updateLife() {
        setLife((e) => e += softLife);
        setSoftLife(0);
    }
    return(
        <>
        <table>
            <tr>
                <td><input id="name" type="text" maxLength="15" placeholder={props.name}></input></td>
            </tr>
            <tr>
                <td id="life">
                <button onClick={() => {handleLife(-1)}} className="quickLife qlneg">-</button> 
                {JSON.stringify(life)} {<img src={hp} height="60px" alt="hello"></img>}
                <button onClick={() => {handleLife(1)}} className="quickLife qlpos">+</button>
                </td>
            </tr>
        <tr>
            <td>
        <div>
            <button className="softLifeBtn SoftNeg" onClick={() => {handleSoftLife(-20)}}>-20</button>
            <button className="softLifeBtn softNeg" onClick={() => {handleSoftLife(-5)}}>-5</button>
            <button className="softLifeBtn softNeg" onClick={() => {handleSoftLife(-1)}}>-1</button>
            <button className="softLifeBtn submitSoftLife" title="Change life total" onClick={() => {updateLife()}}>{softLife}</button>
            <button className="softLifeBtn softPos" onClick={() => {handleSoftLife(1)}}>+1</button>
            <button className="softLifeBtn softPos" onClick={() => {handleSoftLife(5)}}>+5</button>
            <button className="softLifeBtn SoftPos" onClick={() => {handleSoftLife(20)}}>+20</button>
        </div>
            </td>
        </tr>
        <tr>
            <td><p className="cmdmglabel">Commander Damage</p><input type="number" min="0" max="99" className="cmdmg" defaultValue="0"></input></td>
        </tr>
        </table>
        </>
    )
}

export default Player; 