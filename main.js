import './src/styles/generic/generic.css'
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import ScoreBoard  from './src/objects/ScoreBoard'
import BoardGame from './src/objects/BoardGame'

const $root = document.querySelector("#root")


$root.insertAdjacentHTML(
    "beforeend", 
    `
    ${ScoreBoard()}
    ${BoardGame(2)}
    `
);














//desafio 1
//  6 * card alura
//compónente player
//todos os cards que faltam
//fazer a carta virar
