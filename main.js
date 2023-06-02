import './src/styles/generic/generic.css'
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import BoardGame from './src/objects/BoardGame'
import PlayerName from './src/components/PlayerName'
import ScoreBoard  from './src/objects/ScoreBoard'

const $root = document.querySelector("#root")


$root.insertAdjacentHTML(
    "beforeend", 
    `
    ${ScoreBoard()}
    ${BoardGame(6)}
    `
);














//desafio 1
//  6 * card alura
//compónente player
//todos os cards que faltam
//fazer a carta virar
