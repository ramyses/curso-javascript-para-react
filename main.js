import './src/styles/generic/generic.css'
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import BoardGame from './src/objects/BoardGame'


const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);














//desafio 1
//  6 * card alura
//compónente player
//todos os cards que faltam
//fazer a carta virar
