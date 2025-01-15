function Coin() {
    function handleCoin() {
        let result = Math.random();
        result > 0.5 ? alert('Heads') : alert('Tails')
    }
    return(
        <button className="coin" onClick={() => {handleCoin()}}>
            Coin Flip
        </button>
    )
}

export default Coin;