import CardGame from "../../components/CardGame"

function BoardGame(amountCards) {
    const $htmlCardgame =  CardGame()
    const $htmlBoardGame = $htmlCardgame.repeat(amountCards)
    return $htmlBoardGame
}


export default BoardGame;