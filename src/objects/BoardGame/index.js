import "./style.css"
import CardGame from "../../components/CardGame"

function BoardGame(amountCards) {
    const $htmlCardgame =  CardGame()
    const $htmlBoardGame = $htmlCardgame.repeat(amountCards)
    return /*html*/`
        <section class="board-game">
            ${$htmlBoardGame}
        </section>
    `
}


export default BoardGame;