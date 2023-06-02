import './src/styles/generic/generic.css'
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import BoardGame from './src/objects/BoardGame'
import PlayerName from './src/components/PlayerName'


const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $htmlPlayerName = PlayerName();

$root.insertAdjacentHTML(
    "beforeend", 
    `
    ${PlayerName("Player1")}
    ${PlayerName("Player2")}
    ${BoardGame(6)}
    `
);














//desafio 1
//  6 * card alura
//compónente player
//todos os cards que faltam
//fazer a carta virar
