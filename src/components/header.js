import { useState } from "react";
function Header() {
    var [start,setStart] = useState(20);
    return(
        <div className="resetLife">
        <button>Reset Starting Life</button>
        <input type="range" id="range" min="20" max="100" step="10" defaultValue={start} onChange={(e) => setStart(e.target.value)}></input>
        <p>{start}</p>
        </div>
    )
}

export default Header;